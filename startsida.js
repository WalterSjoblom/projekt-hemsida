// Runys Salong — startsida.js

document.addEventListener('DOMContentLoaded', () => {

  // Navigationsbar scrolleffekt
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburgermeny
  const hamburgarknapp = document.getElementById('burger');
  const navlankar = document.getElementById('navLinks');

  hamburgarknapp.addEventListener('click', () => {
    const oppen = navlankar.classList.toggle('open');
    const streck = hamburgarknapp.querySelectorAll('span');
    if (oppen) {
      streck[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      streck[1].style.opacity = '0';
      streck[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      streck.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Stäng menyn när en länk klickas
  navlankar.querySelectorAll('a').forEach(lank => {
    lank.addEventListener('click', () => {
      navlankar.classList.remove('open');
      hamburgarknapp.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });

});