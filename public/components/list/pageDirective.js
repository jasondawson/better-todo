var app = angular.module('todo');

app.directive('page', function () {
	return {
		scope: {
			lists: '='
		},
		restrict: 'AE',
		templateUrl: 'components/list/views/pageView.html',
		controller: function ($scope) {
			$scope.test = 'page'
			console.log($scope.lists);
		}
	}
})