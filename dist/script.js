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
  const textarea1 = document.createElement('textarea');
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
  textarea1.classList.add('textarea');
  document.querySelector('.screen > .wrapper')
          .appendChild(textarea);
  document.querySelector('.screen > .wrapper')
          .appendChild(textarea1);

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
/* harmony import */ var _keyboardLayoutEnRu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardLayoutEnRu */ "./src/js/keyboardLayoutEnRu.js");






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
    capsLock: false, // caps lock status to toggle case
    shift: false, // shift status to toggle case
    shiftDown: false, // shift status to allow click shift + key by mouse
    brakingElements: _keyboardLayoutEnRu__WEBPACK_IMPORTED_MODULE_1__["brakingElementsArr"],
    languages: _keyboardLayoutEnRu__WEBPACK_IMPORTED_MODULE_1__["languagesArr"],
    currentLang: 'En',
    alt: 'Alt',
    langIndex: { En: 0, EnAlt: 1, Ru: 2, RuAlt: 3 },
    keyLayout: _keyboardLayoutEnRu__WEBPACK_IMPORTED_MODULE_1__["keyboardLayoutEnRu"],
    input: null,
    caretIndex: 0,
    elementsPerLine: 127
  },

  init(container) {
    // check google chrome language
    let lang = Object(_keyboardLayoutEnRu__WEBPACK_IMPORTED_MODULE_1__["getLanguage"])();
    // create keyboard
    this.properties.currentLang = sessionStorage.getItem('language') || lang;
    console.log('init with currentLang ' + lang);
    this.elements.main = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');

    // setup keyboard elements
    this.elements.main.classList.add('keyboard-panel', 'keyboard-panel_hidden');

    this.elements.keyboardContainer.classList.add('keyboard-panel__keys');
    this.elements.keyboardContainer.appendChild(this._createKeys());
    this.elements.keys = this.elements.keyboardContainer.querySelectorAll(
      '.key'
    );

    // add to DOM
    this.elements.main.appendChild(this.elements.keyboardContainer);
    container.appendChild(this.elements.main);

    // add keyboard events handlers
    Object(_keyboardEventHandler__WEBPACK_IMPORTED_MODULE_0__["keyboardEventHandler"])(this);

    // automatically use keyboard for elements with  .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach(element => {
      element.addEventListener('focus', () => {
        this.open(element, element.value, currentValue => {
          element.value = currentValue;
          console.log(element.selectionStart);
          element.focus();
        });
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    
    // create HTML for an icon
    const createIconHTML = iconName => {
      return `<i class='material-icons'>${iconName}</i>`;
    };
    for (let keyCode in this.properties.keyLayout) {
      // choose proper value according to current currentLang

      const key = this.properties.keyLayout[keyCode][
        this.properties.langIndex[this.properties.currentLang]
      ];
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
            for (const key of this.elements.keys) {
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
            this._deleteSymbol(keyCode);
          });

          break;

        case 'CapsLock':
          keyElement.classList.add('key_medium', 'key_activatable', 'special');
          keyContent.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('mouseup', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle(
              'key_activatable_active',
              this.properties.capsLock
            );
          });

          break;

        case 'Enter':
          keyElement.classList.add('key_medium', 'special');
          keyContent.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this._pastSymbol('\n');
          });

          break;

        case 'Space':
          keyElement.classList.add('key_extra-wide', 'special');
          keyContent.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this._pastSymbol(' ');
          });

          break;

        case 'Tab':
          keyElement.classList.add('key_medium', 'special');
          keyContent.innerHTML = createIconHTML('keyboard_tab');

          keyElement.addEventListener('click', () => {
            this._pastSymbol('\t');
          });

          break;

        case 'ShiftLeft':
        case 'ShiftRight':
          keyElement.classList.add('key_medium', 'special');
          keyContent.textContent = key;
          keyElement.addEventListener('mousedown', () => {
            // cant press shift if it is pressed already
            if (!this.properties.shiftDown) {
              this._toggleShift();
              this.properties.shiftDown = true;
              keyElement.classList.add('key_active');
            }
          });
          keyElement.addEventListener('mouseup', event => {
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
          keyElement.classList.add('key_medium', 'special');
          keyContent.textContent = key;

          break;

        case 'AltLeft':
        case 'AltRight':
          keyElement.classList.add('key_medium', 'special');
          keyContent.textContent = key;          
          break;

        case 'Delete':
          keyElement.classList.add('key_medium', 'special');
          keyContent.textContent = key;
          keyElement.addEventListener('click', () => {
            this._deleteSymbol(keyCode);
          });
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

          keyElement.addEventListener('click', () => {
            this._pastSymbol('↑');
          });
          break;

        case 'ArrowLeft':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_left');

          keyElement.addEventListener('click', () => {
            let caretInd = this.properties.input.selectionStart;
            if (caretInd > 0) {
              this.properties.input.setSelectionRange(
                caretInd - 1,
                caretInd - 1
              );
            }
            this._triggerEvent('onInput');
          });
          break;

        case 'ArrowDown':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_down');

          keyElement.addEventListener('click', () => {
            this._pastSymbol('↓');
          });
          break;

        case 'ArrowRight':
          keyElement.classList.add('special');
          keyContent.innerHTML = createIconHTML('keyboard_arrow_right');

          keyElement.addEventListener('click', () => {
            let caretInd = this.properties.input.selectionStart;
            if (caretInd <= this.properties.input.value.length) {
              this.properties.input.setSelectionRange(
                caretInd + 1,
                caretInd + 1
              );
            }
            this._triggerEvent('onInput');
          });
          break;

        default:
          keyContent.textContent = key;

          keyElement.addEventListener('click', () => {
            this._pastSymbol(keyContent.textContent);
          });

          break;
      }
      keyElement.setAttribute('id', keyCode);
      keyElement.appendChild(keyContent);
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    }
    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (!key.classList.contains('special')) {
        // caps lock only change case
        key.children[0].textContent =
          this.properties.capsLock ^ this.properties.shift
            ? key.children[0].textContent.toUpperCase()
            : key.children[0].textContent.toLowerCase();
      }
    }
  },

  _toggleShift() {
    this.properties.shift = !this.properties.shift;

    for (const key of this.elements.keys) {
      if (!key.classList.contains('special')) {
        // choose basic or alt layout for given currentLang
        let charIndex = this.properties.shift
          ? this.properties.langIndex[
              this.properties.currentLang + this.properties.alt
            ]
          : this.properties.langIndex[this.properties.currentLang];
        // change case for given layout based on shift and caps
        key.children[0].textContent =
          this.properties.capsLock ^ this.properties.shift
            ? this.properties.keyLayout[key.id][charIndex].toUpperCase()
            : this.properties.keyLayout[key.id][charIndex].toLowerCase();
      }
    }
  },

  changeLanguageLayout() {
    this._changeLanguage();
    sessionStorage.setItem('language', this.properties.currentLang);

    for (const key of this.elements.keys) {
      // choose basic or alt layout for given currentLang
      let charIndex = this.properties.shift
        ? this.properties.langIndex[
            this.properties.currentLang + this.properties.alt
          ] // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        : this.properties.langIndex[this.properties.currentLang];

      if (!key.classList.contains('special')) {
        // change case for given layout based on shift and caps
        key.children[0].textContent =
          this.properties.capsLock ^ this.properties.shift
            ? this.properties.keyLayout[key.id][charIndex].toUpperCase()
            : this.properties.keyLayout[key.id][charIndex].toLowerCase();
      } else if (key.id === 'Lang') {
        // change language special key content
        key.children[0].textContent = this.properties.keyLayout[key.id][
          charIndex
        ];
      }
    }
  },
  // change current language to the next from languages array
  _changeLanguage() {
    let currentIndex = this.properties.languages.indexOf(
      this.properties.currentLang
    );
    let nextIndex =
      (currentIndex + 1 + this.properties.languages.length) %
      this.properties.languages.length;
    this.properties.currentLang = this.properties.languages[nextIndex];
  },

  _pastSymbol(symbol) {
    let caretInd = this.properties.input.selectionStart;
    if (caretInd === this.properties.input.value.length) {
      this.properties.value += symbol;
    } else {
      let temp = this.properties.value.split('');
      temp.splice(caretInd, 0, symbol);
      temp = temp.join('');

      this.properties.value = temp;
      this._triggerEvent('onInput');
      this.properties.input.setSelectionRange(caretInd + 1, caretInd + 1);
    }
    this._triggerEvent('onInput');
  },
  _deleteSymbol(operation) {
      let shift = (operation === 'Delete') ? 0 : -1; 
      let caretInd = this.properties.input.selectionStart+shift;
      if(caretInd <= this.properties.value.length-1 &&  caretInd >= 0) {
        
      let temp = this.properties.value.split('');
      temp.splice(caretInd, 1);
      temp = temp.join('');

      this.properties.value = temp;
      this._triggerEvent('onInput');
      this.properties.input.setSelectionRange(caretInd, caretInd);
      this._triggerEvent('onInput');
      }
  },

  animateKeyDown(key) {
    key.classList.add('key_active');
  },
  animateKeyUp(key) {
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

  document.addEventListener('keydown', (event) => {
    if (keyboard.properties.isOpen) {

      if (keyboard.properties.keyLayout.hasOwnProperty(event.code)) {


        event.preventDefault();
        let element = document.getElementById(event.code);


        if (element) {
          keyboard.animateKeyDown(element);

          switch (element.id) {
            case 'ShiftRight':
            case 'ShiftLeft':

              // to prevent multiple event triggering
              if (!keyboard.properties.shift) {

                if (event.ctrlKey) {
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
    }
  });
  document.addEventListener('keyup', (event) => {
    if (keyboard.properties.isOpen) {
      if (keyboard.properties.keyLayout.hasOwnProperty(event.code)) {
        event.preventDefault();
        let element = document.getElementById(event.code);
        if (element) {
          keyboard.animateKeyUp(element);
          switch (element.id) {
            case 'ShiftRight':
            case 'ShiftLeft':

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
    }
  });
};

/***/ }),

/***/ "./src/js/keyboardLayoutEnRu.js":
/*!**************************************!*\
  !*** ./src/js/keyboardLayoutEnRu.js ***!
  \**************************************/
/*! exports provided: keyboardLayoutEnRu, brakingElementsArr, languagesArr, getLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardLayoutEnRu", function() { return keyboardLayoutEnRu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brakingElementsArr", function() { return brakingElementsArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languagesArr", function() { return languagesArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });

// control keys must be the same
const keyboardLayoutEnRu = {       
  'Backquote'   : ['`', '~',  'ё',  'Ё'],
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
  'Lang'   : ['En',  'En',  'Рус',  'Рус'],
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
  'Slash'       : ['/',  '?',  '.',  ','],
  'ShiftRight'  : ['Shift',  'Shift',  'Shift',  'Shift'],
  'ArrowUp'     : ['ArrowUp',  'ArrowUp',  'ArrowUp',  'ArrowUp'],
  //'IntlBackslash': ['<','>','/','|'],
  'Led': ['led','led','led','led'],
  'ControlLeft' : ['Ctrl',  'Ctrl',  'Ctrl',  'Ctrl'],
  'AltLeft'     : ['Alt',  'Alt',  'Alt',  'Alt'],
  'Space'       : ['Space',  'Space',  'Space',  'Space'],
  'AltRight'    : ['Alt',  'Alt',  'Alt',  'Alt'],
  'ControlRight' : ['Ctrl',  'Ctrl',  'Ctrl',  'Ctrl'],
  'Done'        : ['done',  'done',  'done',  'done'],
  'ArrowLeft'   : ['ArrowLeft',  'ArrowLeft',  'ArrowLeft',  'ArrowLeft'],
  'ArrowDown'   : ['ArrowDown',  'ArrowDown',  'ArrowDown',  'ArrowDown'],
  'ArrowRight'  : ['ArrowRight',  'ArrowRight',  'ArrowRight',  'ArrowRight']
};

const brakingElementsArr = ['Lang', 'Delete', 'Enter', 'Led'];
const languagesArr = ['En','Ru'];

const getLanguage = () =>
{
  let lang;
  switch (navigator.language)
    {
      case 'ru-RU':
        lang = 'Ru';
        break;
      case 'en-EN':
        lang = 'En';
        break;  
      default:
        lang = 'En';
        break; 
    }
  return lang;  
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map