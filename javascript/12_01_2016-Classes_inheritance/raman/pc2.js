(function(){

function maths (a,b){

     this.add = function(){
     return a+b;
    }

    this.sub = function(){

    return a-b;

    }

    this.mul = function(){

    return a*b;
    }

}

var out = new maths(3,6);

console.log(out.add());
console.log(out.sub());
console.log(out.mul());




})();