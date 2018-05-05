//controller for Suppliers
(function() {
    'use strict';

    angular
    .module('app')
    .controller('SuppliersCtrl',['$scope','$state','$window',SuppliersCtrl])

    /**
     * @module Suppliers
     * @description
     * Controller for the Suppliers Page
     */

    function SuppliersCtrl($scope,$state,$window){

        $scope.test = "Suppliers controller successfully loaded";


    }

})();