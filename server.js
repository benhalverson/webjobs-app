'use strict';
var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/job.models');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public/'));

app.get('/api/jobs', function(req, res){
  mongoose.model('Job').find({}).exec(function(error, collection){
    res.send(collection);
  });
});

app.get('*', function(req, res){
  res.render('index');

mongoose.connect('mongodb://localhost/jobfinder');

var connection = mongoose.connection;

connection.once('open', function(){
  console.info('connected to mongodb successfully!');
  jobModel.seedJobs();
});

  console.info('Web server started');

});

// app.listen(process.env.PORT, process.env.IP || 3000);
app.listen(3000);
