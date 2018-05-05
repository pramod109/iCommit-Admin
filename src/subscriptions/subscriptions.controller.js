//controller for Subscriptions
(function() {
    'use strict';

    angular
    .module('app')
    .controller('SubscriptionsCtrl',['$scope','$state','$window',SubscriptionsCtrl])

    /**
     * @module Subscriptions
     * @description
     * Controller for the Subscriptions Page
     */

    function SubscriptionsCtrl($scope,$state,$window){

        $scope.test = "Subscriptions controller successfully loaded";


    }

})();