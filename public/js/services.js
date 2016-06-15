(function () {

  angular.module('ingedex.services', [])

    .factory('ingenieroService', ['$http', '$q', '$filter', '$window', function ($http, $q, $filter, $window) {
      var normalize = $filter('normalize');
      var localStorage = $window.localStorage;

      function all() {
        var deferred = $q.defer();

        $http.get('/ingenieros.json')
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }

       function byName(name) {
        name = normalize(name);
        var deferred = $q.defer();

        all().then(function (data) {
          var results = data.filter(function (ingeniero) {
            return normalize(ingeniero.name) === name;
          });

          if (results.length > 0) {
            deferred.resolve(results[0]);
          } else {
            deferred.reject();
          }

        });

        return deferred.promise;
      }

      function byType(type) {
        type = normalize(type);
        var deferred = $q.defer();

        all().then(function (data) {
          var results = data.filter(function (ingeniero) {
            return ingeniero.type.some(function (t) {
              return normalize(t) === type;
            });
          });

          deferred.resolve(results);
        });

        return deferred.promise;
      }

      function saveComment(ingeniero, solicitud) {
        var solicituds = getsolicituds(ingeniero);

        solicituds.push(solicitud);
        localStorage.setItem(ingeniero, JSON.stringify(solicituds));
      }

      function getsolicituds(ingeniero) {
        var solicituds = localStorage.getItem(ingeniero);

        if (!solicituds) {
          solicituds = [];
        } else {
          solicituds = JSON.parse(solicituds);
        }

        return solicituds;
      }


      return {
        all: all,
        byName: byName,
        byType: byType,
        saveComment: saveComment,
        getComments: getComments
      };

    }]);

})();
