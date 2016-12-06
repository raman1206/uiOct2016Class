
// IIFE construct
(function(){
   // class total  // defining  the function and converting into class
   function total(){

      // creating  total alias to this
     var _total = this;
      _total.addition = null;
      _total.substract = null;
      _total.product = null;
      _total.dividend = null;

      // class mathematics  // defining the function and converting into class
     function mathematics(a,b){

          //creating  mathematics alias to this
        var mathematics = this;
        mathematics.sum = function(){
            return (a+b);
        }

        mathematics.difference = function (){
                return (a-b);
        }

        mathematics.multiplication = function (){
                return (a*b);
        }

        mathematics.division = function (){
                return (a/b);
        }


     }

     // creating the  new instance using keyword new  and calling the function
     var result = new mathematics();
     /*console.log(result.sum(6,3));
     console.log(result.difference(6,3));
     console.log (result.multiplication(6,3));
     console.log(result.division(6,3));*/

      // assigining the result to the total class properties

     _total.addition = result.sum(6,3);
     _total.substract = result.difference(6,3);
     _total.product = result.multiplication(6,3);
     _total.dividend = result.division(6,3);


   }
   // creating the new instance using keyword new and calling the function
   var output = new total();
    console.log(output);

})();