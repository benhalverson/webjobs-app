'use strict';
var express = require('express');
// var jade = require('jade');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public/'));

app.get('*', function(req, res, err){
  res.render('index');
  console.info('All is well');
  console.error('Error!' + err);
});

app.listen(process.env.PORT, process.env.IP);
