//iife construct
(function(angular){
'use strict';
 function LoginService(UserFactory,$location){
   //class
   var self = this;
      // service is a class
   self.performlogin = function (){

       //business logic

     if(UserFactory.user.username === 'Raman' && UserFactory.user.password === 'mb')
     $location.path('/welcome');

   };


 }

//dependency injection

LoginService.$inject = ['UserFactory','$location'];


angular.module('angularprojectApp.services').service('LoginService',LoginService);

 })(window.angular || (window.angulr = {}));
