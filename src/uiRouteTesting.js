angular.module('chapter3.ui.router', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })
  $urlRouterProvider
  . otherwise('/home');
}]);
