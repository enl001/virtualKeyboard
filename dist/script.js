/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/keyboard */ "./src/js/keyboard.js");
/* harmony import */ var _js_createDomTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/createDomTree */ "./src/js/createDomTree.js");
/* harmony import */ var _js_keyboardEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/keyboardEventHandler */ "./src/js/keyboardEventHandler.js");




window.addEventListener('DOMContentLoaded', function() {
  Object(_js_createDomTree__WEBPACK_IMPORTED_MODULE_1__["createDomTree"])();  
  _js_keyboard__WEBPACK_IMPORTED_MODULE_0__["Keyboard"].init(document.querySelector('.keyboard > .wrapper'));
    
  //keyboardEventHandler(Keyboard);

  // Keyboard.open('dcode', function (currentValue) {console.log('value changed: ' + currentValue);},
  // function (currentValue) {console.log('keyboard closed! Finishen value: ' + 
  // currentValue);});
});





//https://www.youtube.com/watch?v=N3cq0BHDMOY


/***/ }),

/***/ "./src/js/createDomTree.js":
/*!*********************************!*\
  !*** ./src/js/createDomTree.js ***!
  \*********************************/
/*! exports provided: createDomTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDomTree", function() { return createDomTree; });


const createDomTree = () => {
  console.log('domTree');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const div = document.createElement('div');
  const textarea = document.createElement('textarea');
  div.classList.add('wrapper');
  header.classList.add('header');
  header.append(div);
  main.classList.add('main');
  footer.classList.add('footer');
  footer.append(div);
    
  const screen = createSection('screen');
  const keyboard = createSection('keyboard');
  
  
  main.append(screen);
  main.append(keyboard);
  
  
  document.body.append(header);
  document.body.append(main);
  document.body.append(footer);
  
  textarea.classList.add('textarea', 'use-keyboard-input');
  document.querySelector('.screen > .wrapper')
          .appendChild(textarea);

};

function createSection(className) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('wrapper');
  if (className) section.classList.add(className);
  section.append(div);
  return section;
}

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/* harmony import */ var _keyboardEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardEventHandler */ "./src/js/keyboardEventHandler.js");


const Keyboard = {
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
    capsLock: false,
    brackingElements : ['backspace', ']', 'enter', 'arrowUp']
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
    Object(_keyboardEventHandler__WEBPACK_IMPORTED_MODULE_0__["keyboardEventHandler"])(this);  

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
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase()
              : key.toLowerCase();
            this._triggerEvent('onInput');
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
        key.children[0].textContent = this.properties.capsLock ? 
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

/***/ }),

/***/ "./src/js/keyboardEventHandler.js":
/*!****************************************!*\
  !*** ./src/js/keyboardEventHandler.js ***!
  \****************************************/
/*! exports provided: keyboardEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardEventHandler", function() { return keyboardEventHandler; });
const keyboardEventHandler = (keyboard) => {
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map