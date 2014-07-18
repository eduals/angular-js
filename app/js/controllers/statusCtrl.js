'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('StatusCtrl', ['$scope', 'rooms', '$rootScope', function($scope, rooms, $rootScope) {
	$scope.rooms = []
    rooms.forEach(function (room) {
        $scope.rooms.push({name:room, status:'taken'});    
    });

}]);
