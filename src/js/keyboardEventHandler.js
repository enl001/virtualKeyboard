export const keyboardEventHandler = (keyboard) => {
  
  window.addEventListener('keydown', (event) => {
  if(keyboard.properties.isOpen) {
    
    event.preventDefault();    
    let element = document.getElementById(event.code);
    if(element) {       
      keyboard.animateKeyDown(element);   
      switch (element.id) {
        case 'ShiftRight' :
        case 'ShiftLeft' :
        // to prevent multiple event triggering
        if(!keyboard.properties.shift) {
          element.dispatchEvent(new Event('mousedown'));
        }
          break;

        default:
          element.dispatchEvent(new Event('click'));
          break;

      }
       
    }

  }
  });
  window.addEventListener('keyup', (event) => {
    if(keyboard.properties.isOpen) {
      event.preventDefault();      
      let element = document.getElementById(event.code);
      if(element) {        
        keyboard.animateKeyUp(element);  
        switch (element.id) {
          case 'ShiftRight' :
          case 'ShiftLeft' :
            element.dispatchEvent(new Event('mouseup'));
            break;
  
          default:
            
            break;
  
        }   
      }
    }
    });  
};