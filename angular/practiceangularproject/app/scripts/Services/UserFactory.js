//iife construct

(function(angular){
   'use strict';

    //call back function for UserFactory
   function UserFactory(){
     // in Factory no need of using the $scope for creating the object just like we did in controllers
     // since factory is an object we create object here only not in controllers
     // reference the this to the variable self

           // so here in factory we create object and in Loginservice file we write business logic
      var self = this;
             // creating a user object
       self.user = {
        'username': '',
        'password': ''
       };
        // return the variable self
       return self;


   }

  //dependency injection

  UserFactory.$inject = [];


  //calling the module service from the app.js

  angular.module('practiceangularprojectApp.services')
  .factory('UserFactory',UserFactory);


})(window.angular || (window.angular = {}));
