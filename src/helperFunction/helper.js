import moment from 'moment';


export function getDistanceFromLatLon([lat1,lon1],lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d.toFixed(1);
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


export function getSportById(allSports, id){
  var foundsport = {};
   allSports.some(sport => {
     if(sport.sportId == id){
       foundsport = sport;
       return true;
     }
   });

  return foundsport;
}



export function getSportsName(allSports, sportsId){

  try{
      var sportsNameArray = [];
    sportsId.forEach(id => {
         allSports.list.some(sport => {
         if(sport.sportId == id){
           sportsNameArray.push(sport.name.split(" ").join("_"));
           return true;
         }
       });
    });
         return sportsNameArray;

  }catch(err){
    console.log(err);
    return [];
  }

}


export function checkIfArrayEqual(a, b){

   return a.sort().toString() == b.sort().toString() ? true :false;

}


export function checkBookingFunctionData(functionData){
  var bookEnabled = false;

  if(functionData.length > 0){

    functionData.some((data) => {

      if(data.type == 3){
        bookEnabled = true;
        return true;
      }

    });

  }else{

    return bookEnabled;
  }

  return bookEnabled;
}



export function findSportName(sports){

  var sportsForTitle = "";
  try {
    if (sports.sportsFromNode === "all") {
      var newArray = sports.allSports.list.slice(0, 6);
      newArray.forEach((sport, i) => {
        if(i === 0){
          sportsForTitle = sportsForTitle.concat(sport.name);
        }else{
          sportsForTitle = sportsForTitle.concat(", " +sport.name);
        }

      });

    } else {
      var sportsFromNode = sports.sportsFromNode.split("_").join(" ").split("-");
      sportsForTitle = sportsFromNode.slice(0, 6).join(", ");

    }
  }catch(err){
    console.log(err);
  }
  return {title : sportsForTitle.toLowerCase(), desc : sportsForTitle.toLowerCase() };

}




export function getDurationasString(duration){

  let hrs =  (parseInt(duration/60)) > 0 ? (parseInt(duration/60)) + " hr ":"";

  let mins =  duration % 60  > 0 ? duration % 60 + " mins":"";

  let  dText = hrs + mins;

  return dText;

}


export function searchSport(sportsArray, text) {
  function regexEscape(str) {
    return str.replace(/\+/g, '').replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  let regex = new RegExp(regexEscape(text), 'i');
  let sports = [];

     sportsArray.forEach((item) => {

    if ((item.name.search(regex) !== -1)) {
      sports.push(item);
    }
  });

  return sports;
}


export function getDates(totalDays){
  let current = moment();
  let daysArray = [];

  [...Array(totalDays).keys()].forEach((i) => {
    daysArray.push(moment(current).add(i, 'days'));
  });

 return daysArray;

}





