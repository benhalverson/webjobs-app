'use strict';
var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/job.models');

function resetJobs(callback){
  mongoose.connection.collection.jobs.drop(callback);
}

describe('get jobs', function(){
  it('should never be empty since jobs are seeded', function(done){
    mongoose.connect('mongodb://localhost/jobfinder', function(){
      resetJobs(function(){
        jobModel.seedJobs(function(){
          mongoose.model('Job').find({}).exec(function(jobsList){
            expect(jobsList.length).to.be.at.least(1);
            done();
          });
        });
      });
    });
  });
});
