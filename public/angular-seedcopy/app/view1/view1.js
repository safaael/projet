'use strict';

angular.module('myApp.view1', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view1', {
   templateUrl: 'view1/view1.html',
   controller: 'View1Ctrl'
 });
 
}])

/*.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]) */

/*  .factory('Student', function($resource) {
    var Student = $resource('/students/:id.json', {id: '@id'});
    
    .controller('View1Ctrl',function($scope, Student) {
   $scope.students = Student.query(); 
 
});
  
}) */

.controller('View1Ctrl',['$scope','$resource',function($scope, $resource) {
  var Student = $resource('/students/:id.json', {id: '@id'});
  $scope.students = Student.query();
 
}]);
  
  