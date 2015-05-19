var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/job.models");


describe("get jobs", function(){

  it("should never be empty since jobs are seeded", function(done) {
    mongoose.connect('mongodb://localhost/jobfinder', function() {
      mongoose.model('Job').find({}).exec(function(error, jobsList){
        expect(jobsList.length).to.be.at.least(1);
        done();
      });
    });
  });
});