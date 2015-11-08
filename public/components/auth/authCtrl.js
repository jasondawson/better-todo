var app = angular.module('todo');

app.controller('AuthCtrl', function ($scope, $state, authService) {
	
	$scope.test = 'auth'
	
	$scope.login = function () {
		authService.login($scope.username)
			.then(function (response) {
				$state.go('todo')
			})
			.catch(function (err) {
				console.log(err);
			})
	}
	
	$scope.logout = function () {
		authService.logout()
			.then(function (response) {
				$state.go('auth')
			})
			.catch(function (err) {
				console.log(err);
				$state.go('auth');
			})
	}
})