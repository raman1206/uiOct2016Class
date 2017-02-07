//iife construct

(function(angular){
  'use strict';

  function HomeController(UserFactory,LoginSerivce){
          /*   //user object
      UserFactory.user ={
         'username': '',
         'password': ''
      };*/


       // simply we can say that connection between controller($scope) and user factory
         var vm = this;

       vm.user = UserFactory.user;

    //angular event ng-click from the home html
     vm.signin = function(){
             //actually the business should be here inside the angular event since we dont write in controllers business
           // logic is written in  LoginSerivce.js file

       //performlogin now becomes property of loginservice

       LoginSerivce.performlogin();

     };












  }

//dependecy injection

HomeController.$inject = ['UserFactory','LoginService'];


//calling the module from the app.js
angular.module('practiceangularprojectApp.controllers')
.controller('HomeController', HomeController);



})(window.angular || (window.angular = {}));
