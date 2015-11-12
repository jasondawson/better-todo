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
				lists: function (listService) {
					return listService.getLists();
				}
			}
		})
})