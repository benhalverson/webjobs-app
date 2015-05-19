var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/job.models");

mongoose.connect('mongodb://localhost/jobfinder');
describe("get jobs", function(){

  it("should never be empty since jobs are seeded", function(){
    mongoose.model('Job').find({}).exec(function(error, jobsList){
      res.send(jobsList);
      expect(jobsList.length).to.be.at.least(1);
    });
  });
});
