var app = angular.module('todo');

app.directive('card', function () {
	return {
		scope: {
			details: '='
		},
		restrict: 'AE',
		templateUrl: 'components/list/views/cardView.html',
		controller: function ($scope) {
			$scope.test = 'card'
			console.log($scope.details);
		}
	}
})