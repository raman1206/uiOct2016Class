//iife construct
(function(angular){
'use strict';
 function ControllerOne(LoginService,UserFactory){

    //mvvm approach treating the controller as class
     //vm is view model

     var vm =this;
      vm.user = UserFactory.user;

      //angular event from the sample.html
      vm.signin = function(){

      LoginService.performlogin();
      };



 }


//dependency injection

ControllerOne.$inject = ['LoginService','UserFactory'];


//calling the module from app.js
angular.module('angularprojectApp.controllers').controller('ControllerOne',ControllerOne);

})(window.angular || (window.angular = {}));
