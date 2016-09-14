(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.check = function () {
    if ($scope.menu.length <= 0) {
      $scope.message = "Please enter data first";
      return;
    }
    var menuItems = $scope.menu.split(',');

    if (menuItems.length > 3) {
      $scope.message = "Too much";
    }
    else {
      $scope.message = "Enjoin";
    }


  };
}

})();
