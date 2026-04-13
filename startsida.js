// Runys Salong — startsida.js

// Navbar blir mörk när man scrollar ner
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburgermeny öppnar/stänger navlänkarna
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
}); 