'use strict';
var express = require('express');
// var jade = require('jade');
var app = express();

app.use(express.static(__dirname + '/client/'));
app.set('views', __dirname + 'views');
app.set('view engine', 'jade'); //extension of views

app.get('*', function(req, res){
  res.render('index');
  console.info('All is well');
});

app.listen(process.env.PORT, process.env.IP);
