//controller for NewPlan
(function() {
    'use strict';

    angular
    .module('app')
    .controller('NewPlanCtrl',['$scope','$state','$window',NewPlanCtrl])

    /**
     * @module NewPlan
     * @description
     * Controller for the NewPlan Page
     */

    function NewPlanCtrl($scope,$state,$window){

        $scope.test = "NewPlan controller successfully loaded";
        this.myDate = new Date();


    }

})();