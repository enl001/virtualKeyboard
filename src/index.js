import {Keyboard} from './js/keyboard';
import {createDomTree} from './js/createDomTree';


window.addEventListener('DOMContentLoaded', function() {
  createDomTree();
  
  Keyboard.init();
  // Keyboard.open('dcode', function (currentValue) {console.log('value changed: ' + currentValue);},
  //   function (currentValue) {console.log('keyboard closed! Finishen value: ' + 
  //   currentValue);});
});





//https://www.youtube.com/watch?v=N3cq0BHDMOY
