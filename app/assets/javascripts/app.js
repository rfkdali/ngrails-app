var ngRailsApp = angular.module('ngRailsApp', []);

ngRailsApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.title = "Home";
    
    $http.get('/conditions').success(function(data) {
      $scope.conditions = data
    });

  }]);