/*
//iife construct

(function(angular){
'use strict';
  function ProjectController($scope){
    */
/*$scope.user = {
      FirstName: 'Raman',
      LastName: 'MB'
    };*//*

          // angular event call back function from the html
    $scope.checkfirstname = function(){
       if ($scope.user.FirstName === 'Raman'){
         $scope.user.LastName = 'Meeniga';
       }

       else {
        $scope.user.LastName = '';
       }

    };

  }




//dependency injection
ProjectController.$inject = ['$scope'];



//calling the module from the app.js
angular.module('practiceangularprojectApp.controllers')
.controller('ProjectController',ProjectController);

})(window.angular ||(window.angular = {}));
*/
