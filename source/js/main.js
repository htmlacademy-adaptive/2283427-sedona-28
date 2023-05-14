let navMain = document.querySelector('.main-nav');
let main = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

main.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
});
