var app = angular.module('todo');

app.directive('card', function () {
	return {
		scope: {
			thisListId: '@',
			details: '=',
			setDragCard: '&'
		},
		restrict: 'AE',
		templateUrl: 'components/list/views/cardView.html',
		controller: function ($scope) {
			$scope.dragging = false
			
			$scope.handleMouseDown = function () {
				$scope.dragging = true;
				$scope.setDragCard({ 'card': { 'currently': true, 'card': $scope.details, 'fromList': $scope.thisListId } });
			}
			
			$scope.handleMouseUp = function () {
				$scope.dragging = false;
			}
						
		}
	}
})