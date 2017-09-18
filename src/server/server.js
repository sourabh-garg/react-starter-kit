var express = require('express');
var bodyParser = require("body-parser");                                       // express server
var path = require('path');                                                  // to make paths absolute
var app = express();                                                         // initializing app.

app.use(bodyParser.json());

var wooplrRoute = require('./wooplrRoute');


app.use('/asset', express.static(path.join(__dirname, '../asset')));               // setting paths for css


app.use('/', wooplrRoute);



app.listen(3000);     // listening to port 3000
