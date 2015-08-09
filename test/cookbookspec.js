/* global it */
/* global expect */
/* global inject */
/* global describe */
/* global beforeEach */
describe('MainCtrl', function () {
var mainCtrl, $scope;
beforeEach(module('cookbook'));
beforeEach(inject(function ($controller, $rootScope) {
$scope = $rootScope.$new();
$controller('MainCtrl', {
$scope: $scope
});
}));
it('should assign the correct rapper to scope', function () {
expect($scope.emcee).toEqual('shiva Kumar Routhu');
});
});

describe('testing a demo directive', function() {
	var scope, element;
	beforeEach(module('cookbook'));
	beforeEach(inject(function($rootScope, $compile){
		scope = $rootScope.$new();
		scope.emcee = "hello";
		element = angular.element('<emcee></emcee>');
		$compile(element)(scope);
		scope.$digest();
	}));
	it('demo test for the directive', function(){
			scope.onClick();
			expect(element.text()).toBe('setup hello');
		});
});

describe('dependeny testing', function() {
	var myFactory, url;

	beforeEach(module('cookbook'));
	beforeEach(module(function($provide){
		$provide.value('imageStore', {
			thumbnailUrl: function(id) {
				url = '/thumbs/' + id; 
			}
		});
	}));
	beforeEach(inject(function($injector){
		myFactory = $injector.get('myFactory');

	}));

	it('dependeny test ',  function() {

		myFactory.thumb(1);
		expect(url).toBe('/thumbs/1');
	})
});


