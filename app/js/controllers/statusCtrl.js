'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('StatusCtrl', ['$scope', 'rooms', 'isTaken', function($scope, rooms, isTaken) {
	$scope.rooms = []
    rooms.forEach(function (room) {
        $scope.rooms.push({
        	name: room,
        	status: isTaken(room)
       });
    });

}]);
