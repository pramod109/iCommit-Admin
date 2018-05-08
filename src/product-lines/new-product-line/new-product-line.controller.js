//controller for NewProductLine
(function() {
    'use strict';

    angular
    .module('app')
    .controller('NewProductLineCtrl',['$scope','$state','$window',NewProductLineCtrl])

    /**
     * @module NewProductLine
     * @description
     * Controller for the NewProductLine Page
     */

    function NewProductLineCtrl($scope,$state,$window){

        $scope.test = "NewProductLine controller successfully loaded";
        //this.myDate = new Date();


    }

})();