import { Keyboard } from './js/keyboard';
import { createDomTree } from './js/createDomTree';

window.addEventListener('DOMContentLoaded', () => {
  createDomTree();
  Keyboard.init(document.querySelector('.keyboard > .wrapper'));
});
