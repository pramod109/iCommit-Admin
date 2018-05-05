//service for the main page
(function () {
    'use strict';

    angular.module('app')
        .service('MainService', ['$resource', 'BASE_URL', MainService]);

    /**
     * @module MainService
     * @description
     * Service required for Main Page
     */
    // function MainService($resource, BASE_URL) {

    //     this.template = function () {
    //         return $resource(BASE_URL + '/self/loans/template');
    //     }

    //     this.loan = function () {
    //         return $resource(BASE_URL + '/self/loans');
    //     }
    // }

})();