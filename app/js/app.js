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
  $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/appointment', {templateUrl: 'partials/appointment.html', controller: 'Appointment'});
  $routeProvider.when('/status', {templateUrl: 'partials/status.html', controller: 'StatusCtrl'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]).
value('Fun', 'FunRoom').
value('Aquarium', 'AquariumRoom').
value('rooms', ['Fun', 'Aquarium']).

// in minutes
value('defaultDuration', 30);

angular.module('myApp.controllers', []);
