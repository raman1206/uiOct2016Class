// primitve data types

// integer type
var a = 5;
// float data type
var b = 9.5;
// string data type
var firstname='raman';
// null data type
var c = null;
// undefined data type
var d = undefined;
// boolean data type
var iscssloaded = true;

console.log(a);
console.log(b);
console.log(firstname);
console.log(c);
console.log(d);
console.log(iscssloaded);


var p = {
    firstname:'raman',
    rollno:1,
    isPresent:true
    q: {
       lastname:'meeniga',
       rollno:2
        r: {
           fullname:'raman meeniga',
           rollno:3
        }

    }
};


var r = {
   fullname:'ram charan',
   rollno:4
};


console.log(p);
console.log(p.firstsname);
console.log(p.rollno);
console.log(p.q.lastname);
console.log(p.q.rollno);
console.log(p.q.r.fullname);
console.log(p.q.r.rollno);



console.log(r);
console.log(r.fullname);
console.log(r.rollno);


//updating the properties

p.firstname = 'mahesh';
p.q.r.fullname ='mahesh ghattamaneni';


r.fullname ='vijay';

console.log(p.firstname);
console.log(p.q.r.lastname);


console.log(r.fullname);
