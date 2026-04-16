// Hamburgermeny
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});

// Stoppar sidan från att laddas om när formuläret skickas
document.getElementById('bokningsformular').addEventListener('submit', (e) => {
  e.preventDefault();
});