//iife construct

(function(angular){
'use strict';
function MyController($scope,LoginService,UserFactory){
  /*$rootScope.user = {
    FirstName: 'Praveen',
    LastName: 'Polimera'
  };*/

   // simply we can say that connection between controller($scope) and user factory
   // but here we create a copy/ clone/ duplicate of Userfactory.user
 $scope.user = angular.copy(UserFactory.user);


                          // injecting scope here from the loginserive.js for the checklogin business logic
  LoginService.checklogin($scope);


 }

//dependency injection
MyController.$inject = ['$scope','LoginService','UserFactory'];

//calling the module from app.js
angular.module('practiceangularprojectApp.controllers')
.controller('MyController',MyController);

}) (window.angular ||(window.angular = {}));
