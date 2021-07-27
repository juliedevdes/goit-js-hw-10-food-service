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
if (body.classList.value === 'undefined') {
  body.classList.add(Theme.LIGHT);
  body.classList.remove('undefined');
}

// change-theme code
const changeClasslistForThemesChange = function () {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
};

const onCheckBoxChange = function (e) {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    changeClasslistForThemesChange();
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    changeClasslistForThemesChange();
  }
};

checkBox.addEventListener('change', onCheckBoxChange);

// render-cards code
function createMenu(menu) {
  return menu.map(menuCardTemplate).join('');
}
ulForCards.innerHTML = createMenu(menu);
