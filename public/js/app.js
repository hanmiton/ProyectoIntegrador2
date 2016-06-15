(function () {
  var app = angular.module('ingedex', [
    'ingedex.controllers'
    ]);
 

  app.filter('imageify', function () {
    return function (input) {
      var url = "img/ingenieros/" + input.toLowerCase() + ".jpg";
      return url;
    };
  });

  app.directive('ingenieroName', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/ingeniero-name.html'
    };
  });

  app.directive('ingenieroImage', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/ingeniero-image.html'
    };
  });

  app.directive('ingenieroData', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/ingeniero-data.html'
    };
  });

   app.directive('ingenieroStats', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/ingeniero-stats.html'
    };
  });

   app.directive('ingenieroEvolution', function () {
    return {
      retrict: 'E',
      templateUrl: 'partials/ingeniero-evolution.html'
    };
  });

   app.directive('ingenieroSolicitudes', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/ingeniero-solicitudes.html',
      controller: function () {
         this.solicitudes = [];
          this.solicitud = {};
          this.show = false;

          this.toggle = function () {
            this.show = !this.show;
          };

          this.anonymousChanged = function () {
            if (this.solicitud.anonymous) {
              this.solicitud.email = "";
            }
          };

          this.addSolicitud = function () {
            this.solicitud.date = Date.now();
            this.solicitudes.push(this.solicitud);
            this.solicitud = {};
        };
      },
      controllerAs: 'sltsCtrl'
    };
  });

})();