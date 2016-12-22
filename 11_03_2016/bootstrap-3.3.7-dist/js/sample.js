// iife construct

(function(window){
                          // capturing the li tag and assigning to some variable  i.e DOM concept
var forms = document.querySelectorAll('form');

window.myTest = function(){
   /*// to stop the default event/action
event.PreventDefault()*/
  // logic
  console.log('printed');
}

})(window);