export const keyboardEventHandler = (keyboard) => {
  console.log(keyboard);
  window.addEventListener('keydown', (event) => {
  if(keyboard.properties.isOpen) {
    event.preventDefault();    
    let element = document.getElementById(event.code);
    if(element) { 
      keyboard.animateKeyDown(element);   
      element.dispatchEvent(new Event('click')); 
    }
  }
  });
  window.addEventListener('keyup', (event) => {
    if(keyboard.properties.isOpen) {
      event.preventDefault();      
      let element = document.getElementById(event.code);
      if(element) {        
        keyboard.animateKeyUp(element);     
      }
    }
    });  
};