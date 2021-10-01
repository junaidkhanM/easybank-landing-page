const toggle_btn = document.querySelector('.dropdown-toggle');
const cross_btn = document.querySelector('.dropdown-toggle img');
const navigation = document.querySelector('header .navigation');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

toggle_btn.addEventListener('click', () => {
  if (cross_btn.src.match('./images/icon-hamburger.svg')) {
    cross_btn.src = './images/icon-close.svg';
  } else {
    cross_btn.src = './images/icon-hamburger.svg';
  }
  if (navigation.classList.contains('active')) {
    navigation.classList.remove('active');
    body.classList.remove('noscroll');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    navigation.classList.add('active');
    body.classList.add('noscroll');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
