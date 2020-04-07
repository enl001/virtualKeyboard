!function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const i={elements:{main:null,keyboardContainer:null,keys:[]},properties:{value:"",isOpen:!1,capsLock:!1,shift:!1,shiftDown:!1,brakingElements:["Lang","Delete","Enter","Led"],languages:["En","Ru"],currentLang:"En",alt:"Alt",langIndex:{En:0,EnAlt:1,Ru:2,RuAlt:3},keyLayout:{Backquote:["`","~","ё","Ё"],Digit1:["1","!","1","!"],Digit2:["2","@","2",'"'],Digit3:["3","#","3","№"],Digit4:["4","$","4",";"],Digit5:["5","%","5","%"],Digit6:["6","^","6",":"],Digit7:["7","&","7","?"],Digit8:["8","*","8","*"],Digit9:["9","(","9","("],Digit0:["0",")","0",")"],Minus:["-","_","-","_"],Equal:["=","+","=","+"],Backspace:["Backspace","Backspace","Backspace","Backspace"],Lang:["En","En","Рус","Рус"],Tab:["Tab","Tab","Tab","Tab"],KeyQ:["q","Q","й","Й"],KeyW:["w","W","ц","Ц"],KeyE:["e","E","у","У"],KeyR:["r","R","к","К"],KeyT:["t","T","е","Е"],KeyY:["y","Y","н","Н"],KeyU:["u","U","г","Г"],KeyI:["i","I","ш","Ш"],KeyO:["o","O","щ","Щ"],KeyP:["p","P","з","З"],BracketLeft:["[","{","х","Х"],BracketRight:["]","}","ъ","Ъ"],Delete:["Del","Del","Del","Del"],CapsLock:["Caps","Caps","Caps","Caps"],KeyA:["a","A","ф","Ф"],KeyS:["s","S","ы","Ы"],KeyD:["d","D","в","В"],KeyF:["f","F","а","А"],KeyG:["g","G","п","П"],KeyH:["h","H","р","Р"],KeyJ:["j","J","о","О"],KeyK:["k","K","л","Л"],KeyL:["l","L","д","Д"],Semicolon:[";",":","ж","Ж"],Quote:["'",'"',"э","Э"],Backslash:["\\","|","\\","/"],Enter:["Enter","Enter","Enter","Enter"],ShiftLeft:["Shift","Shift","Shift","Shift"],KeyZ:["z","Z","я","Я"],KeyX:["x","X","ч","Ч"],KeyC:["c","C","с","С"],KeyV:["v","V","м","М"],KeyB:["b","B","и","И"],KeyN:["n","N","т","Т"],KeyM:["m","M","ь","Ь"],Comma:[",","<","б","Б"],Period:[".",">","ю","Ю"],Slash:["/","?",".",","],ShiftRight:["Shift","Shift","Shift","Shift"],ArrowUp:["ArrowUp","ArrowUp","ArrowUp","ArrowUp"],Led:["led","led","led","led"],ControlLeft:["Ctrl","Ctrl","Ctrl","Ctrl"],AltLeft:["Alt","Alt","Alt","Alt"],Space:["Space","Space","Space","Space"],AltRight:["Alt","Alt","Alt","Alt"],ControlRight:["Ctrl","Ctrl","Ctrl","Ctrl"],Done:["done","done","done","done"],ArrowLeft:["ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft"],ArrowDown:["ArrowDown","ArrowDown","ArrowDown","ArrowDown"],ArrowRight:["ArrowRight","ArrowRight","ArrowRight","ArrowRight"]},input:null,caretIndex:0,elementsPerLine:127},init(e){const t=(()=>{let e;switch(navigator.language){case"ru-RU":e="Ru";break;case"en-EN":default:e="En"}return e})();var s;this.properties.currentLang=sessionStorage.getItem("language")||t,this.elements.main=document.createElement("div"),this.elements.keyboardContainer=document.createElement("div"),this.elements.main.classList.add("keyboard-panel","keyboard-panel_hidden"),this.elements.keyboardContainer.classList.add("keyboard-panel__keys"),this.elements.keyboardContainer.appendChild(this.createKeys()),this.elements.keys=this.elements.keyboardContainer.querySelectorAll(".key"),this.elements.main.appendChild(this.elements.keyboardContainer),e.appendChild(this.elements.main),s=this,document.addEventListener("keydown",e=>{if(s.properties.isOpen&&Object.prototype.hasOwnProperty.call(s.properties.keyLayout,e.code)){e.preventDefault();const t=document.getElementById(e.code);if(t)switch(s.animateKeyDown(t),t.id){case"ShiftRight":case"ShiftLeft":s.properties.shift||((e.ctrlKey||e.altKey)&&s.changeLanguageLayout(),t.dispatchEvent(new Event("mousedown")));break;default:t.dispatchEvent(new Event("click"))}}}),document.addEventListener("keyup",e=>{if(s.properties.isOpen&&Object.prototype.hasOwnProperty.call(s.properties.keyLayout,e.code)){e.preventDefault();const t=document.getElementById(e.code);if(t)switch(s.animateKeyUp(t),t.id){case"ShiftRight":case"ShiftLeft":case"CapsLock":t.dispatchEvent(new Event("mouseup"))}}}),document.querySelectorAll(".use-keyboard-input").forEach(e=>{e.addEventListener("focus",()=>{this.open(e)})})},createKeys(){const e=document.createDocumentFragment(),t=e=>`<i class='material-icons'>${e}</i>`;for(const s in this.properties.keyLayout)if(Object.prototype.hasOwnProperty.call(this.properties.keyLayout,s)){const i=this.properties.keyLayout[s][this.properties.langIndex[this.properties.currentLang]],r=document.createElement("div"),n=document.createElement("span"),a=-1!==this.properties.brakingElements.indexOf(s);switch(r.classList.add("key"),s){case"Led":r.classList.add("special"),n.innerHTML=t("highlight"),r.addEventListener("click",()=>{for(const e of this.elements.keys)e.classList.toggle("key_led")});break;case"Lang":r.classList.add("special"),n.textContent=this.properties.currentLang,r.appendChild(n),r.addEventListener("click",()=>{this.changeLanguageLayout()});break;case"Backspace":r.classList.add("key_medium","special"),n.innerHTML=t("backspace"),r.appendChild(n),r.addEventListener("click",()=>{this.deleteSymbol(s)});break;case"CapsLock":r.classList.add("key_medium","key_activatable","special"),n.innerHTML=t("keyboard_capslock"),r.appendChild(n),r.addEventListener("mouseup",()=>{this.toggleCapsLock(),r.classList.toggle("key_activatable_active",this.properties.capsLock)});break;case"Enter":r.classList.add("key_medium","special"),n.innerHTML=t("keyboard_return"),r.addEventListener("click",()=>{this.pastSymbol("\n")});break;case"Space":r.classList.add("key_extra-wide","special"),n.innerHTML=t("space_bar"),r.addEventListener("click",()=>{this.pastSymbol(" ")});break;case"Tab":r.classList.add("key_medium","special"),n.innerHTML=t("keyboard_tab"),r.addEventListener("click",()=>{this.pastSymbol("\t")});break;case"ShiftLeft":case"ShiftRight":r.classList.add("key_medium","special"),n.textContent=i,r.addEventListener("mousedown",()=>{this.properties.shiftDown||(this.toggleShift(),this.properties.shiftDown=!0,r.classList.add("key_active"))}),r.addEventListener("mouseup",()=>{this.properties.shiftDown&&(this.toggleShift(),this.properties.shiftDown=!1,r.classList.remove("key_active"))});break;case"ControlRight":case"ControlLeft":r.classList.add("key_medium","special"),n.textContent=i;break;case"AltLeft":case"AltRight":r.classList.add("key_medium","special"),n.textContent=i;break;case"Delete":r.classList.add("key_medium","special"),n.textContent=i,r.addEventListener("click",()=>{this.deleteSymbol(s)});break;case"Done":r.classList.add("special"),n.innerHTML=t("keyboard_hide"),r.addEventListener("click",()=>{this.properties.value+=" ",this.close()});break;case"ArrowUp":r.classList.add("special"),n.innerHTML=t("keyboard_arrow_up"),r.addEventListener("click",()=>{this.pastSymbol("↑")});break;case"ArrowLeft":r.classList.add("special"),n.innerHTML=t("keyboard_arrow_left"),r.addEventListener("click",()=>{const e=this.properties.input.selectionStart;e>0&&this.properties.input.setSelectionRange(e-1,e-1),this.onInput()});break;case"ArrowDown":r.classList.add("special"),n.innerHTML=t("keyboard_arrow_down"),r.addEventListener("click",()=>{this.pastSymbol("↓")});break;case"ArrowRight":r.classList.add("special"),n.innerHTML=t("keyboard_arrow_right"),r.addEventListener("click",()=>{const e=this.properties.input.selectionStart;e<=this.properties.input.value.length&&this.properties.input.setSelectionRange(e+1,e+1),this.onInput()});break;default:n.textContent=i,r.addEventListener("click",()=>{this.pastSymbol(n.textContent)})}r.setAttribute("id",s),r.appendChild(n),e.appendChild(r),a&&e.appendChild(document.createElement("br"))}return e},toggleCapsLock(){this.properties.capsLock=!this.properties.capsLock;for(const e of this.elements.keys)e.classList.contains("special")||(e.children[0].textContent=this.myXor(this.properties.capsLock,this.properties.shift)?e.children[0].textContent.toUpperCase():e.children[0].textContent.toLowerCase())},toggleShift(){this.properties.shift=!this.properties.shift;for(const e of this.elements.keys)if(!e.classList.contains("special")){const t=this.properties.shift?this.properties.langIndex[this.properties.currentLang+this.properties.alt]:this.properties.langIndex[this.properties.currentLang];e.children[0].textContent=this.myXor(this.properties.capsLock,this.properties.shift)?this.properties.keyLayout[e.id][t].toUpperCase():this.properties.keyLayout[e.id][t].toLowerCase()}},changeLanguageLayout(){this.changeLanguage(),sessionStorage.setItem("language",this.properties.currentLang);for(const e of this.elements.keys){const t=this.properties.shift?this.properties.langIndex[this.properties.currentLang+this.properties.alt]:this.properties.langIndex[this.properties.currentLang];e.classList.contains("special")?"Lang"===e.id&&(e.children[0].textContent=this.properties.keyLayout[e.id][t]):e.children[0].textContent=this.myXor(this.properties.capsLock,this.properties.shift)?this.properties.keyLayout[e.id][t].toUpperCase():this.properties.keyLayout[e.id][t].toLowerCase()}},changeLanguage(){const e=(this.properties.languages.indexOf(this.properties.currentLang)+1+this.properties.languages.length)%this.properties.languages.length;this.properties.currentLang=this.properties.languages[e]},pastSymbol(e){const t=this.properties.input.selectionStart;if(t===this.properties.input.value.length)this.properties.value+=e;else{let s=this.properties.value.split("");s.splice(t,0,e),s=s.join(""),this.properties.value=s,this.onInput(),this.properties.input.setSelectionRange(t+1,t+1)}this.onInput()},deleteSymbol(e){const t="Delete"===e?0:-1,s=this.properties.input.selectionStart+t;if(s<=this.properties.value.length-1&&s>=0){let e=this.properties.value.split("");e.splice(s,1),e=e.join(""),this.properties.value=e,this.onInput(),this.properties.input.setSelectionRange(s,s),this.onInput()}},animateKeyDown(e){e.classList.add("key_active")},animateKeyUp(e){e.classList.remove("key_active")},myXor:(e,t)=>e&&!t||!e&&t,onInput(){this.properties.input.value=this.properties.value,this.properties.input.scrollTop=this.properties.input.scrollHeight,this.properties.input.focus()},open(e){this.properties.input=e,this.properties.value=e.value||"",this.elements.main.classList.remove("keyboard-panel_hidden"),this.properties.isOpen=!0},close(){this.properties.value="",this.elements.main.classList.add("keyboard-panel_hidden"),this.properties.isOpen=!1}};function r(e){const t=document.createElement("section"),s=document.createElement("div");return s.classList.add("wrapper"),e&&t.classList.add(e),t.append(s),t}window.addEventListener("DOMContentLoaded",()=>{(()=>{const e=document.createElement("header"),t=document.createElement("main"),s=document.createElement("footer"),i=document.createElement("div"),n=document.createElement("textarea"),a=document.createElement("p"),o=document.createElement("p");a.textContent="OS type: Windows.",o.textContent='Language change: Alt + Shift, Ctrl + Shift, keyboard key "En"("Рус").',a.classList.add("p"),o.classList.add("p"),i.classList.add("wrapper"),e.classList.add("header"),e.append(i),t.classList.add("main"),s.classList.add("footer"),s.append(i);const p=r("screen"),c=r("keyboard");t.append(p),t.append(c),document.body.append(e),document.body.append(t),document.body.append(s),n.classList.add("textarea","use-keyboard-input"),document.querySelector(".screen > .wrapper").appendChild(a),document.querySelector(".screen > .wrapper").appendChild(o),document.querySelector(".screen > .wrapper").appendChild(n)})(),i.init(document.querySelector(".keyboard > .wrapper"))})}]);