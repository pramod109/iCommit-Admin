//controller for Issues
(function() {
    'use strict';

    angular
    .module('app')
    .controller('IssuesCtrl',['$scope','$state','$window',IssuesCtrl])

    /**
     * @module Issues
     * @description
     * Controller for the Issues Page
     */

    function IssuesCtrl($scope,$state,$window){

        $scope.test = "Issues controller successfully loaded";


    }

})();