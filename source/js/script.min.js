var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var link = document.querySelector(".modal-window__open");
var popup = document.querySelector(".modal-window");
  
navMain.classList.remove('main-nav--nojs');
  
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

link.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.add("modal-window__show");
});

document.addEventListener("keydown", function (evt) {
 if (evt.keyCode === 27) {
  evt.preventDefault();
  popup.classList.remove("modal-window__show");
 }
});
