//controller for Users
(function() {
    'use strict';

    angular
    .module('app')
    .controller('UsersCtrl',['$scope','$state','$window',UsersCtrl])

    /**
     * @module Users
     * @description
     * Controller for the Users Page
     */

    function UsersCtrl($scope,$state,$window){

        $scope.test = "Users controller successfully loaded";


    }

})();