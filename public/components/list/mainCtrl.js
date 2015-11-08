var app = angular.module('todo');

app.controller('MainCtrl', function ($scope, lists) {
	
	$scope.lists = lists;

})