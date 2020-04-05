import {keyboardEventHandler} from './keyboardEventHandler';
import {keyboardLayoutEnRu} from './keyboardLayoutEnRu';
import {brakingElementsArr} from './keyboardLayoutEnRu';
import {languagesArr} from './keyboardLayoutEnRu';
import {getLanguage} from './keyboardLayoutEnRu';

export const Keyboard = {
  elements: {
    main: null,
    keyboardContainer: null,
    keys: []
  },

  eventHandlers: {
    onInput: null,
    onClose: null
  },
  
  properties: {
    value: '',    
    isOpen: false,
    capsLock: false,  // caps lock status to toggle case
    shift : false,    // shift status to toggle case
    shiftDown :false, // shift status to allow click shift + key by mouse
    brakingElements : brakingElementsArr,
    languages : languagesArr,
    currentLang:'En',
    alt:'Alt',
    langIndex: {'En':0, 'EnAlt':1, 'Ru':2, 'RuAlt':3},
    keyLayout : keyboardLayoutEnRu,
    input: null 
  },

  init(container) {
    // check google chrome language 
    let lang = getLanguage();    
    // create keyboard
    this.properties.currentLang = sessionStorage.getItem('language') || lang;
    console.log('init with currentLang ' + lang);
    this.elements.main = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');

    // setup keyboard elements
    this.elements.main.classList.add(
      'keyboard-panel',
      'keyboard-panel_hidden'
    );

    this.elements.keyboardContainer.classList.add('keyboard-panel__keys');
    this.elements.keyboardContainer.appendChild(this._createKeys());
    this.elements.keys = this.elements.keyboardContainer.querySelectorAll('.key');  

    // add to DOM
    this.elements.main.appendChild(this.elements.keyboardContainer);
    container.appendChild(this.elements.main);
  
    // add keyboard events handlers
    keyboardEventHandler(this);  

    // automatically use keyboard for elements with  .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach(element => {

      element.addEventListener('focus', () => {
        this.open(element, element.value, currentValue => {
          element.value = currentValue;})
      });
    });

    },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    //const this.properties.keyLayout = keyboardLayoutEnRu; 

    // create HTML for an icon
    const createIconHTML = iconName => {
      return `<i class='material-icons'>${iconName}</i>`;
    };
    for(let keyCode in this.properties.keyLayout) 
    {
      // choose proper value according to current currentLang
      
      const key = this.properties.keyLayout[keyCode][this.properties.langIndex[this.properties.currentLang]];
      const keyElement = document.createElement('div');
      const keyContent = document.createElement('span');
      const insertLineBreak =
        this.properties.brakingElements.indexOf(keyCode) !== -1;

      //add classes
      keyElement.classList.add('key');
      // special keys
      switch (keyCode) {
        case 'Led':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('highlight');
          keyElement.addEventListener('click', () => {
            for (const key of this.elements.keys){      
              key.classList.toggle('key_led');
            }            
          });
        break;


        case 'Lang':
            keyElement.classList.add('special');
            keyContent.textContent = this.properties.currentLang; 
            keyElement.appendChild(keyContent);

            keyElement.addEventListener('click', () => {
             this.changeLanguageLayout();
             });
  
        break;

        case 'Backspace':
          keyElement.classList.add('key_medium', 'special');
          keyContent.innerHTML = createIconHTML('backspace');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0,
              this.properties.value.length - 1);
            this._triggerEvent('onInput');
          });

          break;

        case 'CapsLock':
          keyElement.classList.add('key_medium','key_activatable','special');
          keyContent.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('mouseup', () => {
            
              this._toggleCapsLock();
              keyElement.classList.toggle('key_activatable_active', this.properties.capsLock);
            
          });

          break;

        case 'Enter':
          keyElement.classList.add('key_medium','special');
          keyContent.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('onInput');
          });

          break;

        case 'Space':
          keyElement.classList.add('key_extra-wide','special');
          keyContent.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('onInput');
          });

          break;

          case 'Tab':
          keyElement.classList.add('key_medium','special');
          keyContent.innerHTML = createIconHTML('keyboard_tab');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\t';
            this._triggerEvent('onInput');
          });

          break;

        case 'ShiftLeft':  
        case 'ShiftRight':
          
          keyElement.classList.add('key_medium','special');
          keyContent.textContent = key;  
          keyElement.addEventListener('mousedown', () => {
            // cant press shift if it is pressed already
            if (!this.properties.shiftDown) {
              this._toggleShift();
              this.properties.shiftDown = true;
              keyElement.classList.add('key_active');
            }
            
          });   
          keyElement.addEventListener('mouseup', (event) => { 
            
            // cant press shift if it is pressed already            
            if (this.properties.shiftDown) {
              this._toggleShift();
              this.properties.shiftDown = false;
              keyElement.classList.remove('key_active');
            }
          });  

        break;

          
        case 'ControlRight':
        case 'ControlLeft':
          keyElement.classList.add('key_medium','special');
          keyContent.textContent = key;  
          
        break;

        case 'AltLeft':
        case 'AltRight':
          keyElement.classList.add('key_medium','special');
          keyContent.textContent = key;          

        break;

        case 'Delete':
          keyElement.classList.add('key_medium','special');
          keyContent.textContent = key;  
          

        break;

        case 'Done':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_hide');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.close();
            this._triggerEvent('onClose');
          });

          break;

          case 'ArrowUp':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_up');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

          case 'ArrowLeft':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_left');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

          case 'ArrowDown':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_down');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

          case 'ArrowRight':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_right');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

        default:          
          keyContent.textContent = key;

          keyElement.addEventListener('click', (event) => {

            this.properties.value += keyContent.textContent;

            this._triggerEvent('onInput');

            //this.properties.input.focus();
            // this.properties.input.setSelectionRange(this.properties.value.length-1,
            //    this.properties.value.length-1);
            // console.log(this.properties.input.selectionStart);
          });

          
          break;
      }
      keyElement.setAttribute('id',keyCode);
      keyElement.appendChild(keyContent);
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    };
    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == 'function'){
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {    
    this.properties.capsLock = !this.properties.capsLock;
    
    for (const key of this.elements.keys){      
      if(!key.classList.contains('special')) {
        // caps lock only change case
        key.children[0].textContent = 
            (this.properties.capsLock ^ this.properties.shift) ? 
            key.children[0].textContent.toUpperCase() : 
            key.children[0].textContent.toLowerCase();            
      }
    }
  },

  _toggleShift() {    
    this.properties.shift = !this.properties.shift;
    
    for (const key of this.elements.keys){      
      if(!key.classList.contains('special')) {
        // choose basic or alt layout for given currentLang
        let charIndex = (this.properties.shift)
              ? this.properties.langIndex[this.properties.currentLang+this.properties.alt]
              : this.properties.langIndex[this.properties.currentLang];             
        // change case for given layout based on shift and caps
        key.children[0].textContent = 
        (this.properties.capsLock ^ this.properties.shift) ? 
          this.properties.keyLayout[key.id][charIndex].toUpperCase() : 
          this.properties.keyLayout[key.id][charIndex].toLowerCase();  
      }
    }
  }, 
  
  changeLanguageLayout(){

    this._changeLanguage();  
    sessionStorage.setItem('language', this.properties.currentLang);

    for (const key of this.elements.keys){      
      // choose basic or alt layout for given currentLang
        let charIndex = (this.properties.shift)
              ? this.properties.langIndex[this.properties.currentLang + this.properties.alt] // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              : this.properties.langIndex[this.properties.currentLang]; 
        
      if(!key.classList.contains('special')) {
                              
        // change case for given layout based on shift and caps
        key.children[0].textContent = 
        (this.properties.capsLock ^ this.properties.shift) ? 
          this.properties.keyLayout[key.id][charIndex].toUpperCase() : 
          this.properties.keyLayout[key.id][charIndex].toLowerCase();  
      } else if(key.id === 'Lang') {
        // change language special key content 
        key.children[0].textContent = this.properties.keyLayout[key.id][charIndex];
      }
    }
  },
  // change current language to the next from languages array
  _changeLanguage (){
    
    let currentIndex = this.properties.languages.indexOf(this.properties.currentLang);
    let nextIndex =  (currentIndex + 1 + this.properties.languages.length) % this.properties.languages.length;
    this.properties.currentLang = this.properties.languages[nextIndex];
    
  },

  animateKeyDown(key){
    key.classList.add('key_active');
  },
  animateKeyUp(key){
    key.classList.remove('key_active');
  },

  open(element, initialValue, onInput, onClose) {
    this.properties.input = element;
    console.log('open on element ' + element);
    console.log(element.selectionStart);
    this.properties.value = initialValue || '';
    this.eventHandlers.onInput = onInput;
    this.eventHandlers.onClose = onClose;
    this.elements.main.classList.remove('keyboard-panel_hidden');
    this.properties.isOpen = true;    
  },

  close() {
    console.log('close');
    this.properties.value = '';
    this.eventHandlers.onInput = null;
    this.eventHandlers.onClose = null;
    this.elements.main.classList.add('keyboard-panel_hidden');
    this.properties.isOpen = false;
  }
};

//https://learn.javascript.ru/keyboard-events