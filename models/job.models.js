'use strict';
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
  title:{ type: String},
  description:{type:String}
});


var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(callback){
  Job.find({}).exec(function(error, collection){
    if(collection.length === 0){
      Job.create({title:'Cook', description: 'You will make food'});
      Job.create({title:'Waiter', description: 'You will serve food'});
      Job.create({title:'Developer', description: 'You will eat sleep and breathe code'}, callback);
    }
  });
};
