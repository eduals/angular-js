'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('Appointment', ['$scope', '$rootScope', function($scope, $rootScope) {
	if (!$rootScope.appointments) {
		$rootScope.appointments = [];
	}

	$scope.appointment = {};

	$scope.save = function() {
		$rootScope.appointments.push($scope.appointment);
	}
}]);
