'use strict';
angular.module('dailyjobs-app', []);

angular.module('dailyjobs-app').controller('testCtrl', function($scope) {
  $scope.jobs = [{
    title: 'Web Developer', description: 'You will code'
    }, {
    title: 'Sales Guy', description: 'You will sell stuff'
    }];
});
