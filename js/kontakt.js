// Runys Salong — boka.js

// Öppnar och stänger hamburgarmenyn på mobil
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});

// Förhindrar att sidan laddas om när formuläret skickas
document.getElementById('bokningsformular').addEventListener('submit', (e) => {
  e.preventDefault();
});