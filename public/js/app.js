(function () {

  var app = angular.module('ingedex', [
    'ngRoute',
    'ingedex.controllers',
    'ingedex.directives',
    'ingedex.filters',
    'ingedex.services'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/ingedex.html',
        controller: 'IngedexController'
      })
      .when('/ingeniero/:id', {
        templateUrl: 'views/ingeniero.html',
        controller: 'IngenieroController',
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();