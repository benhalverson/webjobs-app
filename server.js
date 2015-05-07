'use strict';
var express = require('express');
// var jade = require('jade');
var app = express();

app.use(express.static(__dirname + '/public/'));
app.set('views', __dirname);
app.set('view engine', 'jade'); //extension of views

app.get('*', function(req, res){
  res.render('index');
  console.info('All is well');
});

app.listen(3000);
console.log('server on localhost:3000');
