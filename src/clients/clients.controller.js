//controller for Clients
(function() {
    'use strict';

    angular
    .module('app')
    .controller('ClientsCtrl',['$scope','$state','$window',ClientsCtrl])

    /**
     * @module Clients
     * @description
     * Controller for the Clients Page
     */

    function ClientsCtrl($scope,$state,$window){

        $scope.test = "Clients controller successfully loaded";


    }

})();