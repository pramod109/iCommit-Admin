//controller for the Home page
(function() {
  'use strict';

  angular
  .module('app')
  .controller('MainCtrl',['$scope','$state','$window',MainCtrl])

  /**
   * @module Main
   * @description
   * Controller for the Main Page
   */

  function MainCtrl($scope, $state, $window) {
    
    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 100, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  }

})();