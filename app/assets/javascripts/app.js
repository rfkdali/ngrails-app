var ngRailsApp = angular.module('ngRailsApp', ['ui.bootstrap'])
  .controller('HomeCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
    $scope.title = "Condition list";
    
    $http.get('/conditions').success(function(data) {
      $scope.conditions = data
    });

    $scope.open = function (label, synonymList) {
      var modalInstance = $modal.open({
        templateUrl: "modal.html",
        controller: 'modalCtrl',
        resolve: {
          label : function() {
            return label;
          },
          synonymList : function() {
            return synonymList;
          }
        },
        windowClass: 'modal-window'
      });
    }
  }])

  .controller('modalCtrl', ['$scope','$modalInstance','label', 'synonymList', function ($scope, $modalInstance, label, synonymList) {
      $scope.label = label;
      $scope.synonymList = synonymList;
      $scope.close = function () {
        $modalInstance.dismiss('cancel');
      };
    }
    ]
  )

  .directive('openModal', function() {
    return {
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          scope.open(scope.condition.label, scope.condition.synonyms);
        })
      }
    }
  });