// Runys Salong — startsida.js

// Lägger till klassen "scrolled" på navbaren när användaren scrollar ner
// CSS-klassen gör att navbaren får en synlig bakgrundsfärg
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// Öppnar och stänger hamburgarmenyn på mobil
// Klassen "open" styr synlighet i CSS
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});