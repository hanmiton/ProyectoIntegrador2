(function (_) {

  angular.module('ingedex.controllers', [])
    .controller('IngedexController', ['$rootScope', '$scope', '$routeParams', 'ingenieroService', function ($rootScope, $scope, $routeParams, ingenieroService) {
      var type = $routeParams.type;
      $rootScope.title = "";

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

    .controller('IngenieroController', ['$rootScope', '$scope', '$routeParams', 'ingenieroService', function ($rootScope, $scope, $routeParams, ingenieroService) {
      var name = $routeParams.name;
      //$scope.ingeniero = {};

      ingenieroService.byName(name)
      .then(function (data) {
         $rootScope.title = data.name;
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