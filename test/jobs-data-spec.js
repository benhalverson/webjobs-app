'use strict';
var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/job.models');
var Promise = require('bluebird');

function resetJobs(){
  return new new Promise(function(resolve, reject){
    mongoose.connnection.collection['jobs'].drop(resolve, reject);
  });
}

function findJobs(query){
  return Promise.cast(mongoose.model('Job').find(query).exec());
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);
describe('get jobs', function(){
  it('should never be empty since jobs are seeded', function(done){
    connectDB('mongodb://localhost/jobfinder')
        .then(resetJobs)
        .then(jobModel.seedJobs)
        .then(findJobs)
        .then(function(jobsList){
          expect(jobsList.length).to.be.at.least(1);
          done();
        });
  });
});
