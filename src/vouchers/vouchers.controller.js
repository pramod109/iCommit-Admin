//controller for Vouchers
(function() {
    'use strict';

    angular
    .module('app')
    .controller('VouchersCtrl',['$scope','$state','$window',VouchersCtrl])

    /**
     * @module Vouchers
     * @description
     * Controller for the Vouchers Page
     */

    function VouchersCtrl($scope,$state,$window){

        $scope.test = "Vouchers controller successfully loaded";


    }

})();