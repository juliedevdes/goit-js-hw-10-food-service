import './sass/main.scss';
// get menu
import * as menu from './menu.json';
/*
1 сделать чтобы тема менялась

2 разобраться с HandleBars

3 зарендерить все    */

// референсы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const checkBox = document.querySelector('#theme-switch-toggle');

// default download
body.classList.add(localStorage.theme);
if (localStorage.theme === Theme.DARK) {
  checkBox.checked = true;
}

// делаем чтобы менялось
const onCheckBoxChange = function (e) {
  if (localStorage.theme === Theme.LIGHT) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
};

addEventListener('change', onCheckBoxChange);
