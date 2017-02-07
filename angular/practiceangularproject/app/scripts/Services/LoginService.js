//iife construct

(function(angular){
   'use strict';

    //call back function for UserFactory
   function LoginService(UserFactory,$location){

     // Service is a class
     // reference the this to the variable self

      var self = this;
               //performlogin is your wish you can write what ever name you want
      self.performlogin = function(){
           // business logic to perform the login
          if (UserFactory.user.username === 'Raman' && UserFactory.user.password === 'mb'){
              console.log('success');
              $location.path('/about');
          }

      };
                   // business logic when input fields are empty
       /*self.checklogin = function(){

         if ($scope.user.username === '' && $scope.user.password === ''){
             $location.path('/home');
         }
       };*/

   }

  //dependency injection

  LoginService.$inject = ['UserFactory','$location'];

 //calling the module service from the app.js

  angular.module('practiceangularprojectApp.services')
  .service('LoginService',LoginService);


})(window.angular || (window.angular = {}));

