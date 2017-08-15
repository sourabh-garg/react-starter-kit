require('ignore-styles');

import Api from '../venueListing/api/api';

var path = require('path');
var Express  = require('express');
var React = require ('react');
import {createStore} from 'redux';
var configureStore = require('../venueListing/store/configureStore');
var Index = require ('../venueListing/index');
const createElement = require('react').createElement;
const renderToString = require('react-dom/server').renderToString;
const RouterContext = require('react-router').RouterContext;
const match = require('react-router').match;
const Provider = require('react-redux').Provider;
const routes = require('../venueListing/Routes/serverRoutes');
import reducer from '../venueListing/reducers/rootReducers';
import {renderFullPage} from './index';
import Helmet from 'react-helmet';
var device = require('express-device');
var redis = require('redis');


var client = redis.createClient(6379, 'playo-co.aqbqxo.ng.0001.apse1.cache.amazonaws.com'), multi;

const redisTable = { location : "location", venues: "venues" , sports : "sports"};
const sportsApiData = "sportsApiData";


client.on('connect', function() {

  console.log("connected");

});

client.on("error", function(err) {
    console.error("Error connecting to redis", err);
});



var router = Express.Router();
router.use(device.capture());


router.get('/venues', (req, res) => {

  getmatchRoute(req.url, function(renderProps) {
    createHtmlWithStore(renderProps , res, req.device.type, "landing"  );

  }
);
});



router.get('/venues/:location', (req, res) => {

  getmatchRoute(req.url, function(renderProps) {
     var place =  req.params.location.split('-').join(" ").toLowerCase();
    getFromRedis( [redisTable.location],
                  [place],
                   redisTable.location, res,  function(response, locationForstore, sportsApiResponse){

      createHtmlWithStore(renderProps , res, req.device.type ,
                          "venueList", response,  place,
                          locationForstore, sportsApiResponse, "all" );

    });
  });

});



router.get('/venues/:location/sports/:sport', (req, res) => {

  getmatchRoute(req.url, function(renderProps) {
    var place =  req.params.location.split('-').join(" ").toLowerCase();
    getFromRedis( [redisTable.location, redisTable.sports],
                  [place , req.params.sport.split("_").join(" ").split("-")],
                  redisTable.sports, res, function(response, locationForstore, sportsApiResponse){


      createHtmlWithStore(renderProps , res, req.device.type , "venueList",
                          response, place,  locationForstore,
                           sportsApiResponse, req.params.sport);

    });

  }
);
});



router.get('/venues/:location/:venue', (req, res) => {

  getmatchRoute(req.url, function(renderProps) {
       var place =  req.params.location.split('-').join(" ").toLowerCase();
    getFromRedis( [redisTable.location , redisTable.venues],
                  [place , req.params.venue],
                  redisTable.venues, res, function(response, locationForstore, sportsApiResponse){

        createHtmlWithStore(renderProps , res, req.device.type , "venueDetail",
                           response , place ,  locationForstore, sportsApiResponse );


    });
  }
);
});




router.get('/venue', (req, res) => {
  redirectVenue(req.query.venueId, res);

});




module.exports = router;





export function redirectVenue(id, res){
  var queryParam = "venueId="+id;

  return Api.fetchvenues(queryParam).then(response => {
     var parsedResult = JSON.parse(response.text);
     var venue = parsedResult.list[0];
     var area = venue.area.toLowerCase();
     var keyword = venue.activeKey;
     var newLocation = JSON.stringify({lat: venue.lat, lng : venue.lng});
     client.hset("location", [area , newLocation], function(err, reply) {

     res.redirect('/venues/'+area+"/"+keyword);

    });

 }).catch(err => {
      res.redirect('/venues');
 });


}



export  function getmatchRoute(url, callBack){
   match(
    { routes, location: url },
    (err, redirectLocation, renderProps) => {

      if (err) {
        return res.status(500).send(err.message);
      }
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      callBack(renderProps);

    });
   }




export  function createHtmlWithStore(renderProps , res, devicetype , urltype, response, locationName, latLng, sportsApiResponse, sports){


    var newStoreData = {};

    if(urltype === "venueList"){
      newStoreData = {
        VenueList : {
        list : response,
        pageNo : response.nextPage
      },
      ViewPort : devicetype === "mobile" || devicetype === "phone",
      Location : {
        location: locationName,
        locationLatLon : [latLng.lat, latLng.lng],
        showSelected : "hide"
              },
        SportsFilter : {allSports : sportsApiResponse,
                        sportsFromNode : sports ,
                        sportsSelected : [],
                        filterCategory : [],
                        filterSavedSports : [],
                        filterSavedCategory : [],
                        checkBoxCount : []
                      }};

    }else if (urltype === "venueDetail") {
      newStoreData =  {   DetailPage : response.list[0],
        ViewPort : devicetype === "mobile" || devicetype === "phone",
        Location : {
          location: locationName,
          locationLatLon : [latLng.lat, latLng.lng],
            showSelected : "hide"
        },
        SportsFilter : {allSports :sportsApiResponse,
                        sportsFromNode : sports,
                        sportsSelected : [],
                        filterCategory : [],
                        filterSavedSports : [],
                        filterSavedCategory : [],
                        checkBoxCount : []}
      };


    }else if(urltype === "landing"){
      newStoreData = {ViewPort : devicetype === "mobile" || devicetype === "phone"};
    }

    const store = createStore(reducer, newStoreData);
    let html;
    if (renderProps) {

      html = renderToString( <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>);

    }

    let head = Helmet.rewind();
    const preloadedState = store.getState();
    res.send(renderFullPage(html, preloadedState, head));


  }




export  function getFromRedis(keys, values, urlType , res,  callback){

  keys.push(sportsApiData);

    var sportsArray = [];
    var queries =  keys.map((key, i) => {

      if(key === sportsApiData){

        return ["get", key];

      }else if(Array.isArray(values[i])){

        sportsArray = values[i];
        var array = ["hmget", key];
        values[i].forEach((val, i) => {
          array.push(val);
        });

        return array;
      }else{
        return ["hmget", key , values[i]];
      }
    });
    client.multi(
      queries
    ).exec(function (err, replies) {

       parseRedisResponse(replies, keys, urlType, sportsArray, function(redisResponse, sportsApiResponse){

         if(redisResponse){

           if(redisResponse.queryParam && urlType === redisTable.venues){
            callback(redisResponse.queryParam, redisResponse.locationForstore);
           }else{

            var queryParam;
            if(!redisResponse.queryParam && urlType === redisTable.venues){

              queryParam = "keyword="+values[1];
            }else{
              queryParam = redisResponse.queryParam;
            }
            return Api.fetchvenues(queryParam).then(response => {
              if(urlType === redisTable.venues){
                client.hset(redisTable.venues, [values[1],  response.text ]);
              }
               var parsedResult = JSON.parse(response.text);
               callback(parsedResult, redisResponse.locationForstore, sportsApiResponse);

           }).catch(err => {
                 console.log("some error",err);
                res.redirect('/venues');
           });
          }

        } else{

          res.redirect('/venues');
        }

       });

    });
  }





export  function  parseRedisResponse(replies, keys, urlType, sportsArray, callback){
    try{

    var sportsApiResponse = "";
    var response  = {};
    replies.forEach( (reply, i) => {

      if(keys[i] === redisTable.location){
        response[keys[i]]  = JSON.parse(reply[0]);

      }else if(keys[i] === redisTable.venues && reply[0] === null ){
        response[keys[i]] = "";
      } else if(keys[i] === redisTable.sports){
        response[keys[i]] = reply;
      }else if(keys[i] === sportsApiData ){
        sportsApiResponse = JSON.parse(reply);
        fetchSportsForFilter();
      }
        else{
        response[keys[i]] = JSON.parse(reply[0]);
       }
    });

      getQueryParam(urlType, response, sportsArray, function(queryParamData){

         callback(queryParamData, sportsApiResponse);

      });

    }
     catch(err){
        callback("");
    }

  }


export function getQueryParam(urlType, response, sportsArray, callback){
  var queryParam = "";
  var locationForstore = {};

  if(urlType === redisTable.location || urlType === redisTable.venues){
  if(urlType === redisTable.location){
    queryParam = "page=0&lat="+response.location.lat+"&lng="+response.location.lng;
    locationForstore = {lat : response.location.lat, lng : response.location.lng};
   }else if(urlType === redisTable.venues && response.venues ){
      queryParam =  response.venues;
      locationForstore = {lat : response.location.lat, lng : response.location.lng};
    } else if(!response.venues){
      queryParam = "";
    }
    callback({queryParam : queryParam, locationForstore : locationForstore});
   }

  else if(urlType === redisTable.sports){
    checkIfSportNotAvailable(response.sports, sportsArray, function(foundSports){

      queryParam = "page=0&lat="+response.location.lat+"&lng="+response.location.lng;
      locationForstore = {lat : response.location.lat, lng : response.location.lng};
      if(foundSports){
          queryParam = queryParam.concat("&sportId=", foundSports.join(","));
      }
       callback({queryParam : queryParam, locationForstore : locationForstore});
    });

  }

}


export function checkIfSportNotAvailable(response, sportsArray, callback){

   var newSports = [...response];
   var promises = [];
     response.forEach((sport, i) => {
       if(sport === null){
       promises[i] = findSport(sportsArray[i], i, newSports);
       }
     });

   Promise.all(promises).then(values => {

      callback(newSports);

    }, reason => {
      console.log("fail reason",reason);
       callback("");
    });

}


export function findSport(sport , i, newSports){

    return Api.fetchASports(sport).then(response => {
       var parsedResult = JSON.parse(response.text);
       newSports[i] = parsedResult.data.sportId;
       client.hset(redisTable.sports, [parsedResult.data.name.toLowerCase(), parsedResult.data.sportId]);
  });

}



export  function fetchSportsForFilter(){

  return Api.fetchAllSports().then(response =>{
      client.set(sportsApiData, response.text);
    });
}
