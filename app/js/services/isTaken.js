'use strict';

/* isTaken room service */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services').
  factory('isTaken', ['$rootScope', function($rootScope) {
  	var appointments = $rootScope.appointments || [
  		{
  			date: new Date(),
  			duration: 30,
  			room: 'Fun'
  		}
  	];

  	return function(room) {
  		var currentTime = new Date().getTime();
  		var result = 'free';
  		
      appointments.forEach(function(appointment) {
  			if (appointment.room !== room) {
  				return;
  			}

  			console.log(appointment);
  			var start = appointment.date.getTime();
  			var end = new Date(start + appointment.duration * 60).getTime();
  			if (end >= currentTime && start <= currentTime) {
  				result = 'taken';
  				return false;
  			}
  		});

  		return result;
  	};
  }]);
