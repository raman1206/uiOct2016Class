//iife construct
(function(angular){
'use strict';
  function UserFactory(){

    //create a object in factory coz factory is an object

    var self = this;

     self.user = {
     'username': '',
     'password': ''
      };

      return self;

  }


//dependency injection

UserFactory.$inject = [];



angular.module('angularprojectApp.services').factory('UserFactory',UserFactory);

})(window.angular || (window.angular = {}));
