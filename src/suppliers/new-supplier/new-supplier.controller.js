//controller for New Supplier
(function() {
    'use strict';

    angular
    .module('app')
    .controller('NewSupplierCtrl',['$scope','$state','$window',NewSupplierCtrl])

    /**
     * @module NewSupplier
     * @description
     * Controller for the NewSupplier Page
     */

    function NewSupplierCtrl($scope,$state,$window){

        $scope.test = "NewSupplier controller successfully loaded";


    }

})();