// Runys Salong — tjanster.js

// Hamburgermeny öppnar/stänger navlänkarna
document.getElementById('burger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});