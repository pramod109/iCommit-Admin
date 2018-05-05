//controller for Customers
(function() {
    'use strict';

    angular
    .module('app')
    .controller('CustomersCtrl',['$scope','$state','$window',CustomersCtrl])

    /**
     * @module Clients
     * @description
     * Controller for the Clients Page
     */

    function CustomersCtrl($scope,$state,$window){

        $scope.test = "Customers controller successfully loaded";


    }

})();