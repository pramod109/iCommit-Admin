//controller for Transactions
(function() {
    'use strict';

    angular
    .module('app')
    .controller('TransactionsCtrl',['$scope','$state','$window',TransactionsCtrl])

    /**
     * @module Transactions
     * @description
     * Controller for the Transactions Page
     */

    function TransactionsCtrl($scope,$state,$window){

        $scope.test = "Transactions controller successfully loaded";


    }

})();