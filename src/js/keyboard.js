import {keyboardEventHandler} from './keyboardEventHandler';

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
    brackingElements : ['backspace', 'Del', 'enter', 'arrowUp']
  },

  init(container) {
    // create keyboard
    console.log('init');
    this.elements.main = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');

    // setup keyboard elements
    this.elements.main.classList.add(
      'keyboard-pannel',
      'keyboard-pannel_hidden'
    );

    this.elements.keyboardContainer.classList.add('keyboard-pannel__keys');
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
    const keyLayout = {      
      '\`':'Backquote',
      '1':'Digit1',
      '2':'Digit2',
      '3':'Digit3',
      '4':'Digit4',
      '5':'Digit5',
      '6':'Digit6',
      '7':'Digit7',
      '8':'Digit8',
      '9':'Digit9',      
      '0':'Digit0',
      '-':'Minus',
      '=':'Equal',
      'backspace':'Backspace',
      'Tab':'Tab',
      'q':'KeyQ',
      'w':'KeyW',
      'e':'KeyE',
      'r':'KeyR',
      't':'KeyT',
      'y':'KeyY',
      'u':'KeyU',
      'i':'KeyI',
      'o':'KeyO',
      'p':'KeyP',
      '[':'BracketLeft',
      ']':'BracketRight',
      'Del':'Delete',
      'caps':'CapsLock',
      'a':'KeyA',
      's':'KeyS',
      'd':'KeyD',
      'f':'KeyF',
      'g':'KeyG',
      'h':'KeyH',
      'j':'KeyJ',
      'k':'KeyK',
      'l':'KeyL',
      ';':'Semicolon',
      '\'':'Quote',
      '\\':'Backslash',
      'enter':'Enter',
      'ShiftL':'ShiftLeft',
      'z':'KeyZ',
      'x':'KeyX',
      'c':'KeyC',
      'v':'KeyV',
      'b':'KeyB',
      'n':'KeyN',
      'm':'KeyM',
      ',':'Comma',
      '.':'Period',
      '/':'Slash',
      'ShiftR':'ShiftRight',
      'arrowUp':'ArrowUp',
      'Ctrl':'ControlLeft',
      'AltL':'AltLeft',
      'space':'Space',
      'AltR':'AltRight',
      'done':'Done',
      'arrowLeft':'ArrowLeft',
      'arrowDown':'ArrowDown',
      'arrowRight':'ArrowRight'
    };

    // create HTML for an icon
    const createIconHTML = iconName => {
      return `<i class='material-icons'>${iconName}</i>`;
    };
    for(let key in keyLayout) 
    {
      const keyElement = document.createElement('div');
      const keyContent = document.createElement('span');
      const insertLineBreak =
        this.properties.brackingElements.indexOf(key) !== -1;

      //add classes
      keyElement.classList.add('key');
      // special keys
      switch (key) {
        case 'backspace':
          keyElement.classList.add('key_medium', 'special');
          keyContent.innerHTML = createIconHTML('backspace');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0,
              this.properties.value.length - 1);
            this._triggerEvent('onInput');
          });

          break;

        case 'caps':
          keyElement.classList.add('key_medium', 'key_activatable','special');
          keyContent.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            
            keyElement.classList.toggle('key_activatable_active', this.properties.capsLock);
          });

          break;

        case 'enter':
          keyElement.classList.add('key_medium','special');
          keyContent.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('onInput');
          });

          break;

        case 'space':
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

        case 'ShiftL':  
        case 'ShiftR':
          keyElement.classList.add('key_medium','special');
          keyContent.textContent = key.substring(0,key.length-1);  
          keyElement.addEventListener('mousedown', () => {
            // cant press shift if it is pressed already
            if (!this.shiftDown) {
              this._toggleShift();
              this.shiftDown = true;
              keyElement.classList.add('key_active');
            }
            
          });   
          keyElement.addEventListener('mouseup', () => { 
            // cant press shift if it is pressed already
            if (this.shiftDown) {
              this._toggleShift();
              this.shiftDown = false;
              keyElement.classList.remove('key_active');
            }
          });  
               

        break;
        case 'Ctrl':
          keyElement.classList.add('key_medium','special');
          keyContent.textContent = key;  
          
        break;

        case 'AltL':
        case 'AltR':
          keyElement.classList.add('key_medium','special');
          keyContent.textContent = key.substring(0,key.length-1);  
          

        break;

        case 'Del':
          keyElement.classList.add('special');
          keyContent.textContent = key;  
          

        break;

        case 'done':
          keyElement.classList.add('key_medium','special');
          keyContent.innerHTML = createIconHTML('keyboard_hide');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.close();
            this._triggerEvent('onClose');
          });

          break;

          case 'arrowUp':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_up');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

          case 'arrowLeft':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_left');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

          case 'arrowDown':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_down');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

          case 'arrowRight':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_right');

          // keyElement.addEventListener('click', () => {
            
          // });
          break;

        default:
          keyContent.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            
            
            this.properties.value += 
            (this.properties.capsLock ^ this.properties.shift)
              ? key.toUpperCase()
              : key.toLowerCase();
            this._triggerEvent('onInput');

          // if(this.shiftDown) 
          //   {
          //   this._toggleShift();
          //   this.shiftDown = false;
          //   }
          });

          break;
      }
      keyElement.setAttribute('id',keyLayout[key]);
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
        key.children[0].textContent = 
        (this.properties.capsLock ^ this.properties.shift) ? 
        key.children[0].textContent.toUpperCase() : 
        key.children[0].textContent.toLowerCase();
      }
    }
  },  

  animateKeyDown(key){
    key.classList.add('key_active');
  },
  animateKeyUp(key){
    key.classList.remove('key_active');
  },



  open(element, initialValue, onInput, onClose) {
    console.log('open on element ' + element);
    this.properties.value = initialValue || '';
    this.eventHandlers.onInput = onInput;
    this.eventHandlers.onClose = onClose;
    this.elements.main.classList.remove('keyboard-pannel_hidden');
    this.properties.isOpen = true;
    
  },

  close() {
    console.log('close');
    this.properties.value = '';
    this.eventHandlers.onInput = null;
    this.eventHandlers.onClose = null;
    this.elements.main.classList.add('keyboard-pannel_hidden');
    this.properties.isOpen = false;
  }
};

//https://learn.javascript.ru/keyboard-events