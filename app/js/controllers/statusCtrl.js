'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('StatusCtrl', ['$scope', function($scope) {

	$scope.rooms = [
		{name:'Aquarium','status':'taken'},
		{name:'Fun','status':'available'}
	]

}]);
