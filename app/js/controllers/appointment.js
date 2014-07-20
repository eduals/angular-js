'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('Appointment', ['$scope', '$rootScope', '$location', 'rooms', function($scope, $rootScope, $location, rooms) {
	if (!$rootScope.appointments) {
		$rootScope.appointments = [];
	}

	$scope.appointment = {
		'room': rooms[0],
		'duration': 30
	};
	
	$scope.rooms = rooms;

	$scope.addAppointment = function() {
		$scope.appointment.date = new Date($scope.appointment.date);
		$rootScope.appointments.push($scope.appointment);
		$location.path('/status');	
	};
}]);
