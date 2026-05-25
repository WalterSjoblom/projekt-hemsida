// Runys Salong — kontakt.js

// Hamburgermeny
document.getElementById('burger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});

// Formulärvalidering
document.getElementById('kontaktformular').addEventListener('submit', function (e) {
  e.preventDefault();

  var email      = document.getElementById('cEmail').value.trim();
  var subject    = document.getElementById('cSubject').value.trim();
  var message    = document.getElementById('cMessage').value.trim();

  var emailErr   = document.getElementById('cEmailError');
  var subjectErr = document.getElementById('cSubjectError');
  var messageErr = document.getElementById('cMessageError');
  var success    = document.getElementById('cSuccess');

  emailErr.textContent   = '';
  subjectErr.textContent = '';
  messageErr.textContent = '';
  success.textContent    = '';

  var ok = true;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    emailErr.textContent = 'E-postadress är obligatorisk.';
    ok = false;
  } else if (!emailPattern.test(email)) {
    emailErr.textContent = 'Ange en giltig e-postadress.';
    ok = false;
  }

  if (subject === '') {
    subjectErr.textContent = 'Ärenderubrik får inte vara tom.';
    ok = false;
  }

  if (message === '') {
    messageErr.textContent = 'Meddelande får inte vara tomt.';
    ok = false;
  }

  if (ok) {
    success.textContent = 'Tack! Ditt meddelande har skickats.';
    document.getElementById('kontaktformular').reset();
  }
});