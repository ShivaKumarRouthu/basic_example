/* global angular */
angular.module('cookbook', [])

.controller('MainCtrl', ['$scope', function($scope) {
  $scope.emcee = 'shiva Kumar Routhu';
}])
.directive('emcee', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      scope.onClick = function() {
        element.text('setup ' + scope.emcee);
      };
    }
  };
})
