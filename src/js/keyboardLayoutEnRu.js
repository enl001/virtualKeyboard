
// control keys must be the same
export const keyboardLayoutEnRu = {       
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

export const brakingElementsArr = ['Lang', 'Delete', 'Enter', 'Led'];
export const languagesArr = ['En','Ru'];

export const getLanguage = () =>
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