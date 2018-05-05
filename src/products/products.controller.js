//controller for Products
(function() {
    'use strict';

    angular
    .module('app')
    .controller('ProductsCtrl',['$scope','$state','$window',ProductsCtrl])

    /**
     * @module Products
     * @description
     * Controller for the Products Page
     */

    function ProductsCtrl($scope,$state,$window){

        $scope.test = "Products controller successfully loaded";


    }

})();