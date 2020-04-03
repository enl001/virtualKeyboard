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
    brakingElements : ['Backspace', 'Delete', 'Enter', 'ArrowUp'],
    lang:'En',
    alt:'Alt',
    langIndex: {'En':0, 'EnAlt':1, 'Ru':2, 'RuAlt':3}
  },

  init(container, lang) {
    // create keyboard
    this.properties.lang = lang;
    console.log('init with lang ' + lang);
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
      'Backquote'   : ['\`', '~',  'ё',  'Ё'],
      'Digit1'      : ['1',  '!',  '1',  '!'],
      'Digit2'      : ['2',  '@',  '2',  '\"'],
      'Digit3'      : ['3',  '#',  '3',  '№'],
      'Digit4'      : ['4',  '$',  '4',  ';'],
      'Digit5'      : ['5',  '%',  '5',  '%'],
      'Digit6'      : ['6',  '^',  '6',  ':'],
      'Digit7'      : ['7',  '&',  '7',  '?'],
      'Digit8'      : ['8',  '*',  '8',  '*'],
      'Digit9'      : ['9',  '(',  '9',  '('],      
      'Digit0'      : ['0',  ')',  '0',  ')'],
      'Minus'       : ['-',  '_',  '-',  '_'],
      'Equal'       : ['=',  '+',  '=',  '+'],
      'Backspace'   : ['Backspace',  'Backspace',  'Backspace',  'Backspace'],
      'Tab'         : ['Tab',  'Tab',  'Tab',  'Tab'],
      'KeyQ'        : ['q',  'Q',  'й',  'Й'],
      'KeyW'        : ['w',  'W',  'ц',  'Ц'],
      'KeyE'        : ['e',  'E',  'у',  'У'],
      'KeyR'        : ['r',  'R',  'к',  'К'],
      'KeyT'        : ['t',  'T',  'е',  'Е'],
      'KeyY'        : ['y',  'Y',  'н',  'Н'],
      'KeyU'        : ['u',  'U',  'г',  'Г'],
      'KeyI'        : ['i',  'I',  'ш',  'Ш'],
      'KeyO'        : ['o',  'O',  'щ',  'Щ'],
      'KeyP'        : ['p',  'P',  'з',  'З'],
      'BracketLeft' : ['[',  '{',  'х',  'Х'],
      'BracketRight': [']',  '}',  'ъ',  'Ъ'],
      'Delete'      : ['Del',  'Del',  'Del',  'Del'],
      'CapsLock'    : ['Caps',  'Caps',  'Caps',  'Caps'],
      'KeyA'        : ['a',  'A',  'ф',  'Ф'],
      'KeyS'        : ['s',  'S',  'ы',  'Ы'],
      'KeyD'        : ['d',  'D',  'в',  'В'],
      'KeyF'        : ['f',  'F',  'а',  'А'],
      'KeyG'        : ['g',  'G',  'п',  'П'],
      'KeyH'        : ['h',  'H',  'р',  'Р'],
      'KeyJ'        : ['j',  'J',  'о',  'О'],
      'KeyK'        : ['k',  'K',  'л',  'Л'],
      'KeyL'        : ['l',  'L',  'д',  'Д'],
      'Semicolon'   : [';',  ':',  'ж',  'Ж'],
      'Quote'       : ['\'',  '\"',  'э',  'Э'],
      'Backslash'   : ['\\',  '|',  '\\',  '/'],
      'Enter'       : ['Enter',  'Enter',  'Enter',  'Enter'],
      'ShiftLeft'   : ['Shift',  'Shift',  'Shift',  'Shift'],
      'KeyZ'        : ['z',  'Z',  'я',  'Я'],
      'KeyX'        : ['x',  'X',  'ч',  'Ч'],
      'KeyC'        : ['c',  'C',  'с',  'С'],
      'KeyV'        : ['v',  'V',  'м',  'М'],
      'KeyB'        : ['b',  'B',  'и',  'И'],
      'KeyN'        : ['n',  'N',  'т',  'Т'],
      'KeyM'        : ['m',  'M',  'ь',  'Ь'],
      'Comma'       : [',',  '<',  'б',  'Б'],
      'Period'      : ['.',  '>',  'ю',  'Ю'],
      'Slash'       : ['/',  '?',  '.',  '.'],
      'ShiftRight'  : ['Shift',  'Shift',  'Shift',  'Shift'],
      'ArrowUp'     : ['ArrowUp',  'ArrowUp',  'ArrowUp',  'ArrowUp'],
      'ControlLeft' : ['Ctrl',  'Ctrl',  'Ctrl',  'Ctrl'],
      'AltLeft'     : ['Alt',  'Alt',  'Alt',  'Alt'],
      'Space'       : ['Space',  'Space',  'Space',  'Space'],
      'AltRight'    : ['Alt',  'Alt',  'Alt',  'Alt'],
      'Done'        : ['done',  'done',  'done',  'done'],
      'ArrowLeft'   : ['ArrowLeft',  'ArrowLeft',  'ArrowLeft',  'ArrowLeft'],
      'ArrowDown'   : ['ArrowDown',  'ArrowDown',  'ArrowDown',  'ArrowDown'],
      'ArrowRight'  : ['ArrowRight',  'ArrowRight',  'ArrowRight',  'ArrowRight']
    };

    // create HTML for an icon
    const createIconHTML = iconName => {
      return `<i class='material-icons'>${iconName}</i>`;
    };
    for(let keyCode in keyLayout) 
    {
      // choose proper value according to current lang
      
      const key = keyLayout[keyCode][this.properties.langIndex[this.properties.lang]];
      const keyElement = document.createElement('div');
      const keyContent = document.createElement('span');
      const insertLineBreak =
        this.properties.brakingElements.indexOf(keyCode) !== -1;

      //add classes
      keyElement.classList.add('key');
      // special keys
      switch (keyCode) {
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
          keyElement.classList.add('key_medium', 'key_activatable','special');
          keyContent.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
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
          keyElement.addEventListener('mouseup', () => { 
            // cant press shift if it is pressed already
            if (this.properties.shiftDown) {
              this._toggleShift();
              this.properties.shiftDown = false;
              keyElement.classList.remove('key_active');
            }
          });  
               

        break;
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
          keyElement.classList.add('special');
          keyContent.textContent = key;  
          

        break;

        case 'Done':
          keyElement.classList.add('key_medium','special');
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

          keyElement.addEventListener('click', () => {
            
            let charIndex = (this.properties.capsLock ^ this.properties.shift)
              ? this.properties.langIndex[this.properties.lang+this.properties.alt]
              : this.properties.langIndex[this.properties.lang]; 
            this.properties.value += keyLayout[keyCode][charIndex]; 
            this._triggerEvent('onInput');
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
        let charIndex = (this.properties.capsLock ^ this.properties.shift)
              ? this.properties.langIndex[this.properties.lang+this.properties.alt]
              : this.properties.langIndex[this.properties.lang];             

        key.children[0].textContent = keyLayout[keyCode][charIndex];
        
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