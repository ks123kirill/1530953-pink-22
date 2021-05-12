let mainNavJs = function () {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');
  let mainHeader = document.querySelector('.main-header');
  let logo = document.querySelector('.logo');

  navMain.classList.remove('main-nav--no-js');
  navMain.classList.add('main-nav--open');
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

let initMap = function() {

  let map = document.querySelector('.map');

  let myMap = new ymaps.Map(map, {
    center: [59.93662, 30.3211],
    zoom: 16,
    controls: []
  }, {});

  let myPlacemark = new ymaps.Placemark([59.93662, 30.3211], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [36, 36],
    iconImageOffset: [-18, 12]
  });

  myMap.geoObjects.add(myPlacemark);
};

mainNavJs();
// ymaps.ready(initMap);

