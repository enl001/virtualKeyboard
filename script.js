
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
