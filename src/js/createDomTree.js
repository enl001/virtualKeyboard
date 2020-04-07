function createSection(className) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('wrapper');
  if (className) section.classList.add(className);
  section.append(div);
  return section;
}

export const createDomTree = () => {
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const div = document.createElement('div');
  const textarea = document.createElement('textarea');
  const os = document.createElement('p');
  const langChange = document.createElement('p');

  os.textContent = 'OS type: Windows.';
  langChange.textContent = 'Language change: Alt + Shift, Ctrl + Shift, keyboard key "En"("Рус").';
  os.classList.add('p');
  langChange.classList.add('p');
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
    .appendChild(os);
  document.querySelector('.screen > .wrapper')
    .appendChild(langChange);

  document.querySelector('.screen > .wrapper')
    .appendChild(textarea);
};

export const Spare = '';
