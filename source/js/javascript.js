let mainNavJs = function () {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');
  let mainHeader = document.querySelector('.main-header');
  let logo = document.querySelector('.logo');

  navMain.classList.remove('main-nav--no-js');
  navMain.classList.add('main-nav--open');
  mainHeader.classList.add('main-header--js');
  mainHeader.classList.add('main-header--opacity');
  logo.classList.remove('logo--boxshadow');

  navToggle.addEventListener('click', function() {
    logo.classList.toggle('logo--boxshadow');
    mainHeader.classList.toggle('main-header--opacity');

    if (navMain.classList.contains('main-nav--close')) {
      navMain.classList.remove('main-nav--close');
      navMain.classList.add('main-nav--open');
    } else {
      navMain.classList.add('main-nav--close');
      navMain.classList.remove('main-nav--open');
    }
  });
}

mainNavJs();
