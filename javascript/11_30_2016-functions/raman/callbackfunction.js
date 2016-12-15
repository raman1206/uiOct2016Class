//IIFE construct

(function(){

       //defining the function
var x = function(a,b){

   sum = a+b;

   return sum;
   };

   //calling the function
  x();

   console.log(x);
   console.log(x());

})();