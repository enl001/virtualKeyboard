export const keyboardEventHandler = (keyboard) => {
  
  document.addEventListener('keydown', (event) => {
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
          
          if (event.altKey) 
          {
            keyboard.changeLanguageLayout();
          }  

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
  document.addEventListener('keyup', (event) => {
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
            case 'CapsLock':
              element.dispatchEvent(new Event('mouseup'));
            break;  
          default:
            
            break;
  
        }   
      }
    }
    });  
};