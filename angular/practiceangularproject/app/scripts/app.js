//iife construct
(function(angular){
'use strict';

  function AppConfig($routeProvider){

       $routeProvider
       .when('/signin',{
         templateUrl:'../templates/home.tpl.html',
         controller: 'HomeController as HomeCtrl'
       })

       .when('/about',{
          templateUrl:'../templates/about.tpl.html',
           controller: 'MyController'
       })
       .otherwise('/home');

  }


  // dependency injection

AppConfig.$inject = ['$routeProvider'];



angular
  .module('practiceangularprojectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'practiceangularprojectApp.controllers',
    'practiceangularprojectApp.services'
  ])
   // appconfig  loads before the app runs
  .config(AppConfig);


// create a new module for both controllers

angular.module('practiceangularprojectApp.controllers',[]);

//create a ne module for services

angular.module('practiceangularprojectApp.services',[]);


})(window.angular || (window.angular = {}));
