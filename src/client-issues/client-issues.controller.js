//controller for ClientIssues
(function() {
    'use strict';

    angular
    .module('app')
    .controller('ClientIssuesCtrl',['$scope','$state','$window',ClientIssuesCtrl])

    /**
     * @module Client-Issues
     * @description
     * Controller for the Client-Issues Page
     */

    function ClientIssuesCtrl($scope,$state,$window){

        $scope.test = "Client-Issues controller successfully loaded";


    }

})();