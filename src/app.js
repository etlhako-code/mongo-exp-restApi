var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');


var tutorialRoutes=require('../routes/tutorial.routes');

var app = express();
  
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/tutorials', tutorialRoutes);

function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}

app.use(notFound);

module.exports = app;
