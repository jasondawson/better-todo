var app = angular.module('todo', ['ui.router']);

app.config(function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('auth', {
			url: '/',
			controller: 'AuthCtrl',
			templateUrl: 'components/auth/authView.html'
		})
		.state('todo', {
			url: '/list',
			controller: 'MainCtrl',
			templateUrl: 'components/list/mainView.html',
			resolve: {
				lists: function () {
					var lists = [{ id: 1, title: 'One', cards: [{title: 'something'}, {title: 'something else'}]}, {id: 2, title: 'Two'}];
					return lists;
				}
			}
		})
})