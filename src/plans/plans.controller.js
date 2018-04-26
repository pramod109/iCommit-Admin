//controller for Plans
(function() {
    'use strict';

    angular
    .module('app')
    .controller('PlansCtrl',['$scope','$state','$window',PlansCtrl])

    /**
     * @module Plans
     * @description
     * Controller for the Plans Page
     */

    function PlansCtrl($scope,$state,$window){

        $scope.test = "Plans controller successfully loaded";


    }

})();