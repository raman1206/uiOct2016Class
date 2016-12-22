// iife construct

(function(window){
                          // capturing the li tag and assigning to some variable  i.e DOM concept
var forms = document.querySelectorAll('form');
 // add event listener

    // if you dont mention index  it will give you error because that will output in the form of array thats why we need to give index
 forms[0].addEventListener('click',function(event){
      //stop default event/action

      event.PreventDefault();
      // logic
      console.log('stopped');

 }, false);

})(window);