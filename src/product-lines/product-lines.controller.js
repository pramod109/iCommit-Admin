//controller for Product Lines
(function() {
    'use strict';

    angular
    .module('app')
    .controller('ProductLinesCtrl',['$scope','$state','$window',ProductLinesCtrl])

    /**
     * @module ProductLines
     * @description
     * Controller for the ProductLines Page
     */

    function ProductLinesCtrl($scope,$state,$window){

        $scope.test = "ProductLines controller successfully loaded";


    }

})();