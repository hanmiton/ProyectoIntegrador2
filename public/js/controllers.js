(function (_) {

  angular.module('ingedex.controllers', [])
    .controller('IngedexController', ['$scope', '$routeParams', 'ingenieroService', function ($scope, $routeParams, ingenieroService) {
      var type = $routeParams.type;

      if (type) {
        $scope.type = type;

        ingenieroService.byType(type).then(function (data) {
          $scope.ingenieros = data
          $scope.groupped = partition(data, 4);
        });
      } else {
        ingenieroService.all().then(function (data) {
          $scope.ingenieros = data;
          $scope.groupped = partition(data, 4);
        });
      }

      function partition(data, n) {
        return _.chain(data).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
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

})(_);