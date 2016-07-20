angular
  .module('dashboard', [])
  .controller('dashboard', function($scope, $state, dashFactory, _) {

    $scope.deals = [];
    $scope.overNinety = [];
    $scope.overEighty = [];
    $scope.overSeventy = [];
    $scope.overSixty = [];
    $scope.dontBotherPlaying = [];

    $scope.getDeals = function() {
      dashFactory.getDeals().then(function(data) {
        var data = data.data;

        $scope.deals = _.uniq(data, 'title').sort(function(a, b) {
          if(b["metacriticScore"] !== a["metacriticScore"]) {
            return b["metacriticScore"] - a["metacriticScore"];
          }
          return a["title"].charCodeAt() - b["title"].charCodeAt();
        });

        $scope.deals.forEach(function(deal) {
          if(deal.metacriticScore > 90) {
            $scope.overNinety.push([deal.title, deal.metacriticScore, deal.thumb])

          } else if(deal.metacriticScore >= 80) {
            $scope.overEighty.push([deal.title, deal.metacriticScore, deal.thumb])

          } else if(deal.metacriticScore >= 70) {
            $scope.overSeventy.push([deal.title, deal.metacriticScore, deal.thumb])

          } else if(deal.metacriticScore >= 60) {
            $scope.overSixty.push([deal.title, deal.metacriticScore, deal.thumb])

          } else {
            $scope.dontBotherPlaying.push([deal.title, deal.metacriticScore, deal.thumb])
          }
        });
      })
    }
})
