// iife construct

(function(window){
                          // capturing the li tag and assigning to some variable  i.e DOM concept
var forms = document.querySelectorAll('form');

// to take the action upon clicking form tag i.e <form onClick ="myTest()"
window.myTest = function(){

   /*// to stop the default event/action

event.PreventDefault()

//if you want top stop event bubbling (optional)

  event.StopPropagation(); */

  // logic
  console.log('printed');
}

})(window);