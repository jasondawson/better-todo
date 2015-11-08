var app = angular.module('todo');

app.directive('list', function () {
	return {
		scope: {
			details: '='
		},
		restrict: 'AE',
		templateUrl: 'components/list/views/listView.html',
		controller: function ($scope) {
			$scope.test = 'list'
			console.log($scope.details);
		}
	}
})