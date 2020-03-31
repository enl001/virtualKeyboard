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
    capsLock: false
  },

  init() {
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
    document
      .querySelector('.keyboard > .wrapper')
      .appendChild(this.elements.main);
  
    // automatically use keyboard for elements with  .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach(element => {

      element.addEventListener('focus', () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;})
      });
    });
    },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      'backspace',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      'caps',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'enter',
      'Shift',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '?',
      'ctrl',
      'alt',
      'space',
      'alt',
      'done'
    ];

    // create HTML for an icon
    const createIconHTML = iconName => {
      return `<i class='material-icons'>${iconName}</i>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement('div');
      const keyContent = document.createElement('span');
      const insertLineBreak =
        ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1;

      //add classes
      keyElement.classList.add('key');

      switch (key) {
        case 'backspace':
          keyElement.classList.add('key_medium');
          keyContent.innerHTML = createIconHTML('backspace');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0,
              this.properties.value.length - 1);
            this._triggerEvent('onInput');
          });

          break;

        case 'caps':
          keyElement.classList.add('key_medium', 'key_activatable');
          keyContent.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.appendChild(keyContent);
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle('key_active', this.properties.capsLock);
          });

          break;

        case 'enter':
          keyElement.classList.add('key_medium');
          keyContent.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('onInput');
          });

          break;

        case 'space':
          keyElement.classList.add('key_extra-wide');
          keyContent.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('onInput');
          });

          break;

        case 'Shift':
          keyElement.classList.add('key_medium');
          keyContent.textContent = key;
          keyContent.innerHTML = createIconHTML('');

          keyElement.addEventListener('mousedown', () => {
            console.log('shift mouse down');
          });
          keyElement.addEventListener('mouseup', () => {
            console.log('shift mouse up');            
          });

        break;

        case 'done':
          keyElement.classList.add('key_medium');
          keyContent.innerHTML = createIconHTML('check_circle');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.close();
            this._triggerEvent('onClose');
          });

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

      keyElement.appendChild(keyContent);
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });
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
      if(key.children[0].childElementCount === 0) {
        key.children[0].textContent = this.properties.capsLock ? 
        key.children[0].textContent.toUpperCase() : 
        key.children[0].textContent.toLowerCase();
      }
    }
  },

  open(initialValue, onInput, onClose) {
    console.log('open');
    this.properties.value = initialValue || '';
    this.eventHandlers.onInput = onInput;
    this.eventHandlers.onClose = onClose;
    this.elements.main.classList.remove('keyboard-pannel_hidden');
  },

  close() {
    console.log('close');
    this.properties.value = '';
    this.eventHandlers.onInput = null;
    this.eventHandlers.onClose = null;
    this.elements.main.classList.add('keyboard-pannel_hidden');
  }
};