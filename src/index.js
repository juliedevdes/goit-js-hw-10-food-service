import menuCardTemplate from '../src/menu-card.hbs'; // get template HandleBars

import menu from './menu.json'; // get menu

// refs
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const checkBox = document.querySelector('#theme-switch-toggle');
const ulForCards = document.querySelector('.js-menu');

// default download
body.classList.add(localStorage.theme);
if (localStorage.theme === Theme.DARK) {
  checkBox.checked = true;
}

// change theme code
const onCheckBoxChange = function (e) {
  if (localStorage.theme === Theme.LIGHT) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else if (localStorage.theme === Theme.DARK) {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.add(localStorage.theme);
  }
};

checkBox.addEventListener('change', onCheckBoxChange);

// render cards code
function createMenu(menu) {
  return menu.map(menuCardTemplate).join('');
}
ulForCards.innerHTML = createMenu(menu);
