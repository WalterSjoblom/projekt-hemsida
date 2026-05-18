// Runys Salong — tjanster.js

// Öppnar och stänger hamburgarmenyn på mobil
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});