(function ()
{
  'use strict';
  var module = angular.module('mustaskeClientApp');

  module.config(['$routeProvider', routing]);

  function routing($routeProvider)
  {

    console.log('Routing was initialized');
    $routeProvider.otherwise({redirectTo: '/recent-questions'});

    $routeProvider
      .when(
        '/recent-questions', {
          templateUrl: 'views/recent-questions.view.html',
          controller: 'RecentQuestionsController',
          controllerAs: 'ctrl'
        })
      .when(
        '/top-questions', {
          templateUrl: 'views/top-questions.view.html',
          controller: 'TopQuestionsController',
          controllerAs: 'ctrl'
        })
      .when(
        '/polls', {
          templateUrl: 'views/polls.view.html',
          controller: 'AboutController',
          controllerAs: 'ctrl'
        })
      .when(
      '/settings', {
        templateUrl: 'views/settings.view.html',
        controller: 'AboutController'
      });
  }

})();
