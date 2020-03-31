

export const createDomTree = () => {
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