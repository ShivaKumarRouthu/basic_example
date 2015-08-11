angular.module('chapter3.ngRoute',['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/emcee/:id',{
		controller: 'MainCtrl'
	})
	.when('/home', {
		templateUrl: 'home.html',
		controller: 'HomeCtrl'
	})
	.otherwise('/',{
		redirectTo: '/'
	})
}).controller('routeController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.id = $routeParams.id;
}])
