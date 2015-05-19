'use strict';
angular.module('dailyjobs-app', ['ngResource']);

angular.module('dailyjobs-app').controller('testCtrl', function($scope, $resource) {
  $scope.jobs = $resource('/api/jobs').query();
});
