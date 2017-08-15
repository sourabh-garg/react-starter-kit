var path = require('path');
var Express  = require('express');

var router = Express.Router();

var redis = require('redis');

var client = redis.createClient(6379, 'playo-co.aqbqxo.ng.0001.apse1.cache.amazonaws.com');


client.on('connect', function() {

});



router.post('/web/v1/saveLocation', (req, res) => {

  client.hmget("location", req.body.key, function(err, reply){
     if(!reply.join(",")){
      var newLocation = JSON.stringify({lat: req.body.lat, lng : req.body.lng});
      client.hset("location", [req.body.key.toLowerCase(), newLocation]);
       res.json({requestStatus : 1, message : "Location saved"});
     }else{
       res.json({requestStatus : 0, message : "Location already exist"});
     }
  });

});



module.exports = router;
