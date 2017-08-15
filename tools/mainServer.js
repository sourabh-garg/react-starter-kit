var express = require('express');
var bodyParser = require("body-parser");                                       // express server
var path = require('path');                                                  // to make paths absolute
var app = express();                                                         // initializing app.

app.use(bodyParser.json());

var venueListing = require('./venueListing');
//var nodeApi = require('./nodeApi');



app.use('/js', express.static(path.join(__dirname, '../js')));               // setting paths for css
app.use('/css', express.static(path.join(__dirname, '../css')));
    // setting paths for favicon



app.use('/', venueListing);
//app.use('/api', nodeApi);



app.listen(3000);     // listening to port 3000
