//controller for NewClientIssue
(function() {
    'use strict';

    angular
    .module('app')
    .controller('NewClientIssueCtrl',['$scope','$state','$window',NewClientIssueCtrl])

    /**
     * @module New Client Issue
     * @description
     * Controller for the New Client Issue Page
     */

    function NewClientIssueCtrl($scope,$state,$window){

        $scope.test = "NewClientIssue controller successfully loaded";


    }

})();