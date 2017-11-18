const card = document.querySelector('.card');
const menu = document.querySelector('.navigation')
const menu_icon = document.querySelector('.menu');
const search_icon = document.querySelector('.search');
const input = document.querySelector('input');

menu_icon.addEventListener('click', () => {
  card.classList.toggle('show-menu');
  menu.classList.toggle('active');
}, false);

search_icon.addEventListener('click', () => {
  input.classList.toggle('active');
}, false);
