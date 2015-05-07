'use strict';
var express = require('express');
// var jade = require('jade');
var app = express();

app.use(express.static(__dirname + '/public/'));
app.use('views', __dirname);
app.engine('jade', require('jade').__express);

app.get('*', function(req, res, err){
  res.render('index');
  console.info('All is well');
  console.error('Error!' + err);
});


app.listen(process.env.PORT, process.env.IP, function(port){
  port = 3000;
  console.log('port ' + port);
});
