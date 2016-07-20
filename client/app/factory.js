angular
  .module('factory', [])
  .factory('dashFactory', function($http) {

    var getDeals = function() {
      return $http.get('http://www.cheapshark.com/api/1.0/deals');
    };

    return {
      getDeals: getDeals
    };
})
