'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {templateUrl: 'partials/partial1.html', controller: 'List'});
  $routeProvider.when('/appointment', {templateUrl: 'partials/partial2.html', controller: 'Appointment'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);