// iife construct

(function(window){
                          // capturing the li tag and assigning to some variable  i.e DOM concept
var forms = document.querySelectorAll('.form-horizontal');


    // if you dont mention index  it will give you error because that will output in the form of array thats why we need to give index

    /* here forms[0] is nothing but document.queryselectorall('form-horizontal');
    in w3 schools we can see that in event listeners
      document.queryselectorAll('.form-horizontal).addEventListener('click' , function(event){} , false); */

      // we can also say this way

      // add event listener
 forms[0].addEventListener('click',function(event){
      //stop default event/action

      event.PreventDefault();
      // logic
      console.log('stopped');

 }, false);



   // DispatchEvent


 // create a new event called trippleClick
     var e = new Event('tripleClick');


     // capture the element
     var input = window.document.querySelectorAll('.form-control');

      // listen to the new event
     input[0].addEventListener('tripleClick',function(event){
         // logic to be executed
         console.log(event);
         console.log('Im the new custom event');
     },false);

     // register the new event to the first anchor tag
          input[0].dispatchEvent(e);


  })(window);