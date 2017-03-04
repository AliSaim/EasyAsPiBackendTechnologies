var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");


//var CONTACTS_COLLECTION = "contacts";
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//conntect to mongoDB
mongoose.connect('mongodb://easyaspiadmin:pass123@ds145369.mlab.com:45369/easyaspidb');

//routes
app.use('/api', require('./routes/api'));

//start the server
app.listen(1000);
console.log('Server is running on port 1000');
