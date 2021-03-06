'use strict';
var mongoose = require('mongoose');
var Promise = require('bluebird');

var jobSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String}
});

var jobs = [
{title: 'Cook', description: 'You will make food'},
{title: 'Waiter', description: 'You will serve food'},
{title: 'Developer', description: 'You will eat sleep and breathe code'}
];

var Job = mongoose.model('Job', jobSchema);


function findJobs(query){
  return Promise.cast(mongoose.model('Job').find(query).exec());
}

var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function(){
  return findJobs({}).then(function(collection){
        if(collection.length === 0){
          return Promise.map(jobs, function(job){
            return createJob(job);
          });
        }
      });
};
