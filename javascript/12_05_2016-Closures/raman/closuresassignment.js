
// IIFE construct
(function(){

   function total(){
       // creating  total alias to this
     var _total = this;
      _total.addition = 0;
      _total.substract = 0;
      _total.product = 0;
      _total.dividend = 0;

     function mathematics(a,b){

          //creating  mathematics alias to this
        var mathematics = this;
        mathematics.sum = function mathematics (a,b){
            return (a+b);
        }

        mathematics.difference = function mathematics (a,b){
                return (a-b);
        }

        mathematics.multiplication = function mathematics (a,b){
                return (a*b);
        }

        mathematics.division = function mathematics (a,b){
                return (a/b);
        }


     }

     // inheriting the class mathematics by using keyword new  and calling the function
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
   // inheriting the class total by using keyword new and calling the function
   var output = new total();
    console.log(output);

})();