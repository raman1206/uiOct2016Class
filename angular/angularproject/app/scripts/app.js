'use strict';

/**
 * @ngdoc overview
 * @name angularprojectApp
 * @description
 * # angularprojectApp
 *
 * Main module of the application.
 */



 function AppConfig($routeProvider){
   $routeProvider
   .when('/signin',{
    templateUrl: '../templates/signin.html',
    controller:'ControllerOne as CtrlOne'
   })

   .when('/about',{
    templateUrl:'../templates/about.html'

   })
   .when('/welcome',{
   templateUrl:'../templates/welcome.html'
   })

   .otherwise('/home');




 }

 AppConfig.$inject = ['$routeProvider'];


angular
  .module('angularprojectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularprojectApp.controllers',
    'angularprojectApp.services'
  ])
   .config(AppConfig);

  //create a new module for controllers
  angular.module('angularprojectApp.controllers',[]);

  //create a new module for services
  angular.module('angularprojectApp.services',[]);
