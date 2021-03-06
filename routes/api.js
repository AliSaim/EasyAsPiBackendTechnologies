//dependencies
var express = require('express');
var router = express.Router();

//get models
var Status = require('../models/status');

//routes
Status.methods(['get', 'post', 'post', 'delete']);
Status.register(router, '/status');

//return Router
module.exports = router;