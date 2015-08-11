describe('testing the route', function() {

	beforeEach(module('chapter3.ngRoute'));
	// it('routeController should be mapped to home controller',
	// inject(function($rootScope, $location, $route){
	// 	$location.path('/home');
	// 	$rootScope.$apply();
	// 	expect($route.current.controller).toEqual('HomeCtrl');
	// }));

	it('route controller should be mapped to HomeCtrl',
		inject(function($rootScope, $location, $route) {
		$location.path('/home');
		$rootScope.$apply();
		expect($route.current.controller).toEqual('HomeCtrl');
	}));

	it('route templateUrl should be home.html', inject(function
		($rootScope, $location, $route) {
		$location.path('/home');
		$rootScope.$apply();
		expect($route.current.templateUrl).toEqual('home.html');
	}));

	it('should assign routeParams to scope',
	inject(function($rootScope, $controller) {
		var scope = $rootScope.$new();
		$controller('routeController', {
			$scope: scope,
			$routeParams: {
				id: '1'
			}
		});
		expect(scope.id).toEqual('1');
	}));
});
