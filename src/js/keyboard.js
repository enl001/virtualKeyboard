import { keyboardEventHandler } from './keyboardEventHandler';
import {
  keyboardLayoutEnRu, brakingElementsArr, languagesArr, getLanguage,
} from './keyboardLayoutEnRu';

export const Keyboard = {
  elements: {
    main: null,
    keyboardContainer: null,
    keys: [],
  },

  properties: {
    value: '',
    isOpen: false,
    capsLock: false, // caps lock status to toggle case
    shift: false, // shift status to toggle case
    shiftDown: false, // shift status to allow click shift + key by mouse
    brakingElements: brakingElementsArr,
    languages: languagesArr,
    currentLang: 'En',
    alt: 'Alt',
    langIndex: {
      En: 0, EnAlt: 1, Ru: 2, RuAlt: 3,
    },
    keyLayout: keyboardLayoutEnRu,
    input: null,
    caretIndex: 0,
    elementsPerLine: 127,
  },

  init(container) {
    // check google chrome language
    const lang = getLanguage();
    // create keyboard
    this.properties.currentLang = sessionStorage.getItem('language') || lang;
    this.elements.main = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');

    // setup keyboard elements
    this.elements.main.classList.add('keyboard-panel', 'keyboard-panel_hidden');

    this.elements.keyboardContainer.classList.add('keyboard-panel__keys');
    this.elements.keyboardContainer.appendChild(this.createKeys());
    this.elements.keys = this.elements.keyboardContainer.querySelectorAll(
      '.key',
    );

    // add to DOM
    this.elements.main.appendChild(this.elements.keyboardContainer);
    container.appendChild(this.elements.main);

    // add keyboard events handlers
    keyboardEventHandler(this);

    // automatically use keyboard for elements with  .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element);
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    // create HTML for an icon
    const createIconHTML = (iconName) => `<i class='material-icons'>${iconName}</i>`;
    // eslint-disable-next-line no-restricted-syntax
    for (const keyCode in this.properties.keyLayout) {
      if (Object.prototype.hasOwnProperty.call(this.properties.keyLayout, keyCode)) {
        // choose proper value according to currentLang
        const key = this.properties.keyLayout[keyCode][
          this.properties.langIndex[this.properties.currentLang]
        ];
        const keyElement = document.createElement('div');
        const keyContent = document.createElement('span');
        const insertLineBreak = this.properties.brakingElements.indexOf(keyCode) !== -1;

        // add classes
        keyElement.classList.add('key');
        // special keys
        switch (keyCode) {
          case 'Led':
            keyElement.classList.add('special');
            keyContent.innerHTML = createIconHTML('highlight');
            keyElement.addEventListener('click', () => {
              // eslint-disable-next-line no-restricted-syntax
              for (const k of this.elements.keys) {
                k.classList.toggle('key_led');
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
              this.deleteSymbol(keyCode);
            });
            break;

          case 'CapsLock':
            keyElement.classList.add('key_medium', 'key_activatable', 'special');
            keyContent.innerHTML = createIconHTML('keyboard_capslock');
            keyElement.appendChild(keyContent);
            keyElement.addEventListener('mouseup', () => {
              this.toggleCapsLock();
              keyElement.classList.toggle(
                'key_activatable_active',
                this.properties.capsLock,
              );
            });
            break;

          case 'Enter':
            keyElement.classList.add('key_medium', 'special');
            keyContent.innerHTML = createIconHTML('keyboard_return');
            keyElement.addEventListener('click', () => {
              this.pastSymbol('\n');
            });
            break;

          case 'Space':
            keyElement.classList.add('key_extra-wide', 'special');
            keyContent.innerHTML = createIconHTML('space_bar');
            keyElement.addEventListener('click', () => {
              this.pastSymbol(' ');
            });
            break;

          case 'Tab':
            keyElement.classList.add('key_medium', 'special');
            keyContent.innerHTML = createIconHTML('keyboard_tab');
            keyElement.addEventListener('click', () => {
              this.pastSymbol('\t');
            });
            break;

          case 'ShiftLeft':
          case 'ShiftRight':
            keyElement.classList.add('key_medium', 'special');
            keyContent.textContent = key;
            keyElement.addEventListener('mousedown', () => {
              // cant press shift if it is pressed already
              if (!this.properties.shiftDown) {
                this.toggleShift();
                this.properties.shiftDown = true;
                keyElement.classList.add('key_active');
              }
            });
            keyElement.addEventListener('mouseup', () => {
              // cant press shift if it is pressed already
              if (this.properties.shiftDown) {
                this.toggleShift();
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
              this.deleteSymbol(keyCode);
            });
            break;

          case 'Done':
            keyElement.classList.add('special');
            keyContent.innerHTML = createIconHTML('keyboard_hide');

            keyElement.addEventListener('click', () => {
              this.properties.value += ' ';
              this.close();
            });
            break;

          case 'ArrowUp':
            keyElement.classList.add('special');
            keyContent.innerHTML = createIconHTML('keyboard_arrow_up');

            keyElement.addEventListener('click', () => {
              this.pastSymbol('↑');
            });
            break;

          case 'ArrowLeft':
            keyElement.classList.add('special');
            keyContent.innerHTML = createIconHTML('keyboard_arrow_left');

            keyElement.addEventListener('click', () => {
              const caretInd = this.properties.input.selectionStart;
              if (caretInd > 0) {
                this.properties.input.setSelectionRange(
                  caretInd - 1,
                  caretInd - 1,
                );
              }
              this.onInput();
            });
            break;

          case 'ArrowDown':
            keyElement.classList.add('special');
            keyContent.innerHTML = createIconHTML('keyboard_arrow_down');

            keyElement.addEventListener('click', () => {
              this.pastSymbol('↓');
            });
            break;

          case 'ArrowRight':
            keyElement.classList.add('special');
            keyContent.innerHTML = createIconHTML('keyboard_arrow_right');

            keyElement.addEventListener('click', () => {
              const caretInd = this.properties.input.selectionStart;
              if (caretInd <= this.properties.input.value.length) {
                this.properties.input.setSelectionRange(
                  caretInd + 1,
                  caretInd + 1,
                );
              }
              this.onInput();
            });
            break;

          default:
            keyContent.textContent = key;

            keyElement.addEventListener('click', () => {
              this.pastSymbol(keyContent.textContent);
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
    }
    return fragment;
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    // eslint-disable-next-line no-restricted-syntax
    for (const key of this.elements.keys) {
      if (!key.classList.contains('special')) {
        // caps lock only change case
        key.children[0].textContent = (this.myXor(this.properties.capsLock, this.properties.shift))
          ? key.children[0].textContent.toUpperCase()
          : key.children[0].textContent.toLowerCase();
      }
    }
  },

  toggleShift() {
    this.properties.shift = !this.properties.shift;

    // eslint-disable-next-line no-restricted-syntax
    for (const key of this.elements.keys) {
      if (!key.classList.contains('special')) {
        // choose basic or alt layout for given currentLang
        const charIndex = this.properties.shift
          ? this.properties.langIndex[this.properties.currentLang + this.properties.alt]
          : this.properties.langIndex[this.properties.currentLang];
        // change case for given layout based on shift and caps
        key.children[0].textContent = (this.myXor(this.properties.capsLock, this.properties.shift))
          ? this.properties.keyLayout[key.id][charIndex].toUpperCase()
          : this.properties.keyLayout[key.id][charIndex].toLowerCase();
      }
    }
  },

  changeLanguageLayout() {
    this.changeLanguage();
    sessionStorage.setItem('language', this.properties.currentLang);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of this.elements.keys) {
      // choose basic or alt layout for given currentLang
      const charIndex = this.properties.shift
        ? this.properties.langIndex[this.properties.currentLang + this.properties.alt]
        : this.properties.langIndex[this.properties.currentLang];

      if (!key.classList.contains('special')) {
        // change case for given layout based on shift and caps
        key.children[0].textContent = (this.myXor(this.properties.capsLock, this.properties.shift))
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
  changeLanguage() {
    const currentIndex = this.properties.languages.indexOf(
      this.properties.currentLang,
    );
    const nextIndex = (currentIndex + 1 + this.properties.languages.length)
      % this.properties.languages.length;
    this.properties.currentLang = this.properties.languages[nextIndex];
  },

  pastSymbol(symbol) {
    const caretInd = this.properties.input.selectionStart;
    if (caretInd === this.properties.input.value.length) {
      this.properties.value += symbol;
    } else {
      let temp = this.properties.value.split('');
      temp.splice(caretInd, 0, symbol);
      temp = temp.join('');

      this.properties.value = temp;
      this.onInput();
      this.properties.input.setSelectionRange(caretInd + 1, caretInd + 1);
    }
    this.onInput();
  },

  deleteSymbol(operation) {
    const shift = (operation === 'Delete') ? 0 : -1;
    const caretInd = this.properties.input.selectionStart + shift;
    if (caretInd <= this.properties.value.length - 1 && caretInd >= 0) {
      let temp = this.properties.value.split('');
      temp.splice(caretInd, 1);
      temp = temp.join('');

      this.properties.value = temp;
      this.onInput();
      this.properties.input.setSelectionRange(caretInd, caretInd);
      this.onInput();
    }
  },

  animateKeyDown(key) {
    key.classList.add('key_active');
  },

  animateKeyUp(key) {
    key.classList.remove('key_active');
  },

  myXor(a, b) {
    return ((a && !b) || (!a && b));
  },

  onInput() {
    this.properties.input.value = this.properties.value;
    this.properties.input.scrollTop = this.properties.input.scrollHeight;
    this.properties.input.focus();
  },

  open(element) {
    this.properties.input = element;
    this.properties.value = element.value || '';
    this.elements.main.classList.remove('keyboard-panel_hidden');
    this.properties.isOpen = true;
  },

  close() {
    this.properties.value = '';
    this.elements.main.classList.add('keyboard-panel_hidden');
    this.properties.isOpen = false;
  },
};

export const Spare = '';
