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
/*! no static exports found */
/***/ (function(module, exports) {


const Keyboard = {
  elements: {
  main: null,
  keyboardContainer:null,
  keys:[]
  },
  eventHandlers: {
    onInput : null,
    onClose : null
  },
  properties: {
    value: '',
    capsLock: false
  },

  init() {
    // create keyboard
    console.log('init');
    this.elements.main = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');

    // setup keyboard elements
    this.elements.main.classList.add('keyboard-pannel','1keyboard-pannel_hidden');
    this.elements.keyboardContainer.classList.add('keyboard-pannel__keys');

    // add to DOM
    this.elements.main.appendChild(this.elements.keyboardContainer);
    document.querySelector('.keyboard > .wrapper').appendChild(this.elements.main);

  
  },
  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = ['1','2','3','4','5','6','7','8','9','0','backspace',
          'q','w','e','r','t','y','u','i','o','p',
          'caps','a','s','d','f','g','h','j','k','l','enter',
          'shift','z','x','c','v','b','n','m',',','.','?',
          'ctrl','alt','space','alt','ctrl'];

    // create HTML for an icon
    const createIconHTML = (iconName) => {
      return `<i class='material-icons'>${iconName}</i>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement('div');
      const keyContent = document.createElement('span');
      const insertLineBreak = ['backspace', 'p', 'enter','?'].indexOf(key) !== -1;

      //add classes
      keyElement.classList.add('key');

      switch (key){
        case 'backspace':
          keyElement.classList.add('key_medium');
          keyContent.innerHTML = createIconHTML('backspace');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value
            .substring(0, this.properties.value.length-1);
            this._triggerEvent('onInput');
          });

          break;

        case 'caps':
          keyElement.classList.add('key_medium', 'key_activatable');
          keyContent.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();  
            keyElement.classList.toggle('key_active',this.properties.capsLock);          
          });

          break;  

      }


    });

  },
  _triggerEvent(handlerName){
    console.log('Event Triggered! Event name: '+handlerName);
  },
  _toggleCapsLock() {
        console.log('CapsLock toggled');

  },
  open(initialValue, onInput, onClose) {

  },
  close() {

  }

};


window.addEventListener('DOMContentLoaded', function() {
  createDomTree();
  Keyboard.init();
  
});

// window.onload = () => {
//   console.log('onload');
  
// };




function createSection(className){
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('wrapper');
  if(className) section.classList.add(className);
  section.append(div);
  return section;
}

function createButton(text, classList){  
  const key = document.createElement('div');
  const symbol = document.createElement('span');
  symbol.innerText = text;  
  key.classList.add(...classList);
  key.append(symbol); 
  return key;
}

function createKeyboard(){
  const keyboardPannel = document.createElement('div');
  keyboardPannel.classList.add('keyboard-pannel');
  const div = document.createElement('div');
  div.classList.add('keyboard-pannel__keys');

  let key = createButton('h', ['key']);
  div.append(key);
  key = createButton('Alt', ['key','key_medium']);
  div.append(key);
  key = createButton('Shift', ['key','key_wide']);
  div.append(key);
  key = createButton(' ', ['key','key_extra-wide']);
  div.append(key);
  key = createButton('Caps Lock', ['key','key_medium', 'key_activatable', 'key_active']);
  div.append(key);

  keyboardPannel.append(div);
  return keyboardPannel;
}

const createDomTree = () => {
  console.log('domTree');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const div = document.createElement('div');
  div.classList.add('wrapper');
  header.classList.add('header');
  header.append(div);
  main.classList.add('main');  
  footer.classList.add('footer');
  footer.append(div);

  const screen = createSection('screen');
  const keyboard = createSection('keyboard');
  // keyboard.querySelector('.wrapper').append(createKeyboard());

  main.append(screen);
  main.append(keyboard);

  document.body.append(header);
  document.body.append(main);
  document.body.append(footer);
};

//https://www.youtube.com/watch?v=N3cq0BHDMOY


/***/ })

/******/ });
//# sourceMappingURL=script.js.map