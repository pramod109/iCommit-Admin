//controller for registration
(function() {
    'use strict';

    angular
    .module('app')
    .controller('RegistrationCtrl',['$scope','$state','$window',RegistrationCtrl])

    /**
     * @module Registration
     * @description
     * Controller for the Registration Page
     */

    function RegistrationCtrl($scope,$state,$window){

        $scope.test = "Testing the registration controller...";

        /**
        * @name registrationObject
        * @description Object that is sent to the registration backend
        */
        $scope.registrationObject = {};

        /**
        * @name booleanValues
        * @description Array of boolean values for drop down
        */
        $scope.booleanValues = ['true','false'];
        
        /**
        * @method submit
        * @description Submit data to the registration backend
        */
        $scope.submit = function(){
            // console.log("Button pressed...");
            // console.log($scope.name);
            // $window.alert("Successful");
            // $state.go("app.main");
            $scope.registrationObject = {
                "name":$scope.name,
                "phoneNumber":$scope.phoneNumber,
                "location":$scope.location,
                "address":$scope.address,
                "nationalId":$scope.nationalId,
                "age":$scope.age,
                "gender":$scope.gender,
                "agriculturalInformation" : { "nameOfCrop":$scope.nameOfCrop,
                "acresUnderPlantation":$scope.acresUnderPlantation,
                "inputTypeRequired":$scope.inputTypeRequired,
                "unitOfMeasure":$scope.unitOfMeasure,
                "quantityOfInputRequired":$scope.quantityOfInputRequired
                },
                "financialLiteracyInformation": {
                "usedMobileMoneyBefore":$scope.usedMobileMoneyBefore },
                "householdInformation": { "numberOfMembersInHousehold":$scope.numberOfMembersInHousehold,
                "incomeOfHouseHold":$scope.incomeOfHouseHold,
                "isFarmerLiterate":$scope.isFarmerLiterate,
                "hasLiterateFamilyMember":$scope.hasLiterateFamilyMember
                }
            }
            console.log($scope.registrationObject);
        }


    }

})();