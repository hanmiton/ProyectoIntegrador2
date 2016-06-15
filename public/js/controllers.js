(function () {

  angular.module('ingedex.controllers', [])
    .controller('IngedexController', ['$scope', 'ingenieroService', function ($scope, ingenieroService) {
      ingenieroService.all().then(function (data) {
        $scope.ingenieros = data;
      });
    }])

    .controller('IngenieroController', ['$scope', 'ingenieroService', function ($scope, ingenieroService) {
      $scope.ingeniero = {};

      ingenieroService.byName('ingeniero000001')
      .then(function (data) {
        $scope.ingeniero = data;
      })
    }])

    .controller('TabsController', function () {
      this.tab = 1;

      this.selectTab = function (tab) {
        this.tab = tab;
    };

  });

})();