import {Keyboard} from './js/keyboard';
import {createDomTree} from './js/createDomTree';
import {keyboardEventHandler} from './js/keyboardEventHandler';

window.addEventListener('DOMContentLoaded', function() {
  createDomTree();  
  Keyboard.init(document.querySelector('.keyboard > .wrapper'), 'En');
    
  //keyboardEventHandler(Keyboard);

  // Keyboard.open('dcode', function (currentValue) {console.log('value changed: ' + currentValue);},
  // function (currentValue) {console.log('keyboard closed! Finishen value: ' + 
  // currentValue);});
});





//https://www.youtube.com/watch?v=N3cq0BHDMOY
