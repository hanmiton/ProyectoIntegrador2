(function () {

  var app = angular.module('ingedex', [
    'ngRoute',
    'ingedex.controllers',
    'ingedex.directives',
    'ingedex.filters'

    ]);

    app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/ingeniero.html',
        controller: 'IngedexController'
      })
      .when('/ingeniero/:id', {
        templateUrl: 'views/ingeniero.html',
        controller: 'IngenieroController',
        controllerAs: 'ingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();