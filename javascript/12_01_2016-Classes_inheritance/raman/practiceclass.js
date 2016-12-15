//iife construct

(function(){
// defining the class like function
function add (a,b){
  this.sum = function(){   //sum is property
  return a+b;
  }

 }
     // inheriting the this class by using new keyword and calling the function
  var out = new add(3,6);

console.log(out);
console.log(out.sum());    // out.sum();

})();