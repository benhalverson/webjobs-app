'use strict';
var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/job.model');
var Promise = require('bluebird');
var jobsData = require('../jobs-data.js');

function resetJobs(){
  return new new Promise(function(resolve, reject){
    mongoose.connnection.collection.jobs.drop(resolve, reject);
  });
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);
describe('get jobs', function(){
  var jobs;
  before(function(done){
    connectDB('mongodb://localhost/jobfinder')
        .then(resetJobs)
        .then(jobModel.seedJobs)
        .then(jobsData.findJobs)
        .then(function(collection){
          jobs = collection;
          done();
        });
  });
  it('should never be empty since jobs are seeded', function(){
    expect(jobs.length).to.be.at.least(1);
  });

  it('should have a job with a title', function(){
    expect(jobs[0].title).to.not.be.empty;
  });
  it('should have a job with a description', function(){
    expect(jobs[0].description).to.not.be.empty;
  });
});
