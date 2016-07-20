angular
  .module('app', ['ui.router', 'dashboard', 'factory', 'underscore'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '../dashboard/dashboard.html',
      controller: 'dashboard'
    })

    $urlRouterProvider.otherwise('dashboard');
});
