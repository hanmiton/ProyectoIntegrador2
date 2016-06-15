(function () {

  angular.module('ingedex.controllers', [])
    .controller('IngedexController', ['$scope', '$routeParams', 'ingenieroService', function ($scope, $routeParams, ingenieroService) {
      var type = $routeParams.type;

      if (type) {
        $scope.type = type;

        ingenieroService.byType(type).then(function (data) {
          $scope.ingenieros = data;
        });
      } else {
        ingenieroService.all().then(function (data) {
          $scope.ingenieros = data;
        });
      }
    }])

    .controller('IngenieroController', ['$scope', '$routeParams', 'ingenieroService', function ($scope, $routeParams, ingenieroService) {
      var name = $routeParams.name;
      $scope.ingeniero = {};

      ingenieroService.byName(name)
      .then(function (data) {
        $scope.ingeniero = data;
      });
    }])

    .controller('TabsController', function () {
      this.tab = 1;

      this.selectTab = function (tab) {
        this.tab = tab;
    };

  });

})();