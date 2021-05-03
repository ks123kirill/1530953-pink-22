let mainNavJs = function () {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');
  // let mainHeader = documement.querySelector('.main-header');
  // let mainHeaderOpacity = document.querySelector('.main-header--opacity');

  navMain.classList.remove('main-nav--nojs');
  // mainHeader.classList.add('main-header--opacity');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
}

mainNavJs();
