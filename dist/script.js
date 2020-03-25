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

eval("\nconst Keyboard = {\n  elements: {\n  main: null,\n  keyboardContainer:null,\n  keys:[]\n  },\n  eventHandlers: {\n    onInput : null,\n    onClose : null\n  },\n  properties: {\n    value: '',\n    capsLock: false\n  },\n\n  init() {\n    // create keyboard\n    console.log('init');\n    this.elements.main = document.createElement('div');\n    this.elements.keyboardContainer = document.createElement('div');\n\n    // setup keyboard elements\n    this.elements.main.classList.add('keyboard-pannel','1keyboard-pannel_hidden');\n    this.elements.keyboardContainer.classList.add('keyboard-pannel__keys');\n\n    // add to DOM\n    this.elements.main.appendChild(this.elements.keyboardContainer);\n    document.querySelector('.keyboard > .wrapper').appendChild(this.elements.main);\n\n  \n  },\n  _createKeys() {\n    const fragment = document.createDocumentFragment();\n    const keyLayout = ['1','2','3','4','5','6','7','8','9','0','backspace',\n          'q','w','e','r','t','y','u','i','o','p',\n          'caps','a','s','d','f','g','h','j','k','l','enter',\n          'shift','z','x','c','v','b','n','m',',','.','?',\n          'ctrl','alt','space','alt','ctrl'];\n\n    // create HTML for an icon\n    const createIconHTML = (iconName) => {\n      return `<i class='material-icons'>${iconName}</i>`;\n    };\n\n    keyLayout.forEach(key => {\n      const keyElement = document.createElement('div');\n      const keyContent = document.createElement('span');\n      const insertLineBreak = ['backspace', 'p', 'enter','?'].indexOf(key) !== -1;\n\n      //add classes\n      keyElement.classList.add('key');\n\n      switch (key){\n        case 'backspace':\n          keyElement.classList.add('key_medium');\n          keyContent.innerHTML = createIconHTML('backspace');\n          keyElement.appendChild(keyContent);\n          keyElement.addEventListener('click', () => {\n            this.properties.value = this.properties.value\n            .substring(0, this.properties.value.length-1);\n            this._triggerEvent('onInput');\n          });\n\n          break;\n\n        case 'caps':\n          keyElement.classList.add('key_medium', 'key_activatable');\n          keyContent.innerHTML = createIconHTML('keyboard_capslock');\n          keyElement.appendChild(keyContent);\n          keyElement.addEventListener('click', () => {\n            this._toggleCapsLock();  \n            keyElement.classList.toggle('key_active',this.properties.capsLock);          \n          });\n\n          break;  \n\n      }\n\n\n    });\n\n  },\n  _triggerEvent(handlerName){\n    console.log('Event Triggered! Event name: '+handlerName);\n  },\n  _toggleCapsLock() {\n        console.log('CapsLock toggled');\n\n  },\n  open(initialValue, onInput, onClose) {\n\n  },\n  close() {\n\n  }\n\n};\n\n\nwindow.addEventListener('DOMContentLoaded', function() {\n  createDomTree();\n  Keyboard.init();\n  \n});\n\n// window.onload = () => {\n//   console.log('onload');\n  \n// };\n\n\n\n\nfunction createSection(className){\n  const section = document.createElement('section');\n  const div = document.createElement('div');\n  div.classList.add('wrapper');\n  if(className) section.classList.add(className);\n  section.append(div);\n  return section;\n}\n\nfunction createButton(text, classList){  \n  const key = document.createElement('div');\n  const symbol = document.createElement('span');\n  symbol.innerText = text;  \n  key.classList.add(...classList);\n  key.append(symbol); \n  return key;\n}\n\nfunction createKeyboard(){\n  const keyboardPannel = document.createElement('div');\n  keyboardPannel.classList.add('keyboard-pannel');\n  const div = document.createElement('div');\n  div.classList.add('keyboard-pannel__keys');\n\n  let key = createButton('h', ['key']);\n  div.append(key);\n  key = createButton('Alt', ['key','key_medium']);\n  div.append(key);\n  key = createButton('Shift', ['key','key_wide']);\n  div.append(key);\n  key = createButton(' ', ['key','key_extra-wide']);\n  div.append(key);\n  key = createButton('Caps Lock', ['key','key_medium', 'key_activatable', 'key_active']);\n  div.append(key);\n\n  keyboardPannel.append(div);\n  return keyboardPannel;\n}\n\nconst createDomTree = () => {\n  console.log('domTree');\n  const header = document.createElement('header');\n  const main = document.createElement('main');\n  const footer = document.createElement('footer');\n  const div = document.createElement('div');\n  div.classList.add('wrapper');\n  header.classList.add('header');\n  header.append(div);\n  main.classList.add('main');  \n  footer.classList.add('footer');\n  footer.append(div);\n\n  const screen = createSection('screen');\n  const keyboard = createSection('keyboard');\n  // keyboard.querySelector('.wrapper').append(createKeyboard());\n\n  main.append(screen);\n  main.append(keyboard);\n\n  document.body.append(header);\n  document.body.append(main);\n  document.body.append(footer);\n};\n\n//https://www.youtube.com/watch?v=N3cq0BHDMOY\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });