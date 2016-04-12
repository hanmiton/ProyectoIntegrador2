(function () {
  var app = angular.module('ingedex', []);

  app.controller('IngenieroController', function () {
    this.ingeniero = {
      id: "001",
      name: "Nombre001",
      ingenieria: "Ingenieria001",
      tipo: [ "Tipo1", "Tipo2" ],
      edad: "40",
      facultad: "facultad001",
      habilidades: [ "habilidad1", "habilidad2"],
       stats: {
        st1: 45,
        st2: 49,
        st3: 49,
        "sp.st4": 65,
        "sp.st5": 65,
        st6: 45,
        total: 318
      },
      evolution: [ "Ingeniero", "Masterado", "Doctorado" ]
    };

  });

  app.controller('TabsController', function () {
    this.tab = 1;

    this.selectTab = function (tab) {
      this.tab = tab;
    };

  });

  app.controller('SolicitudesController', function () {
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

  });
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


})();