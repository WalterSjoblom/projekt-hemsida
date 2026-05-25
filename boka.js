// Runys Salong — boka.js

// Hamburgermeny
document.getElementById('burger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});

// Formulärvalidering
document.getElementById('bokningsformular').addEventListener('submit', function (e) {
  e.preventDefault();

  var firstName = document.getElementById('firstName').value.trim();
  var lastName  = document.getElementById('lastName').value.trim();
  var email     = document.getElementById('email').value.trim();
  var phone     = document.getElementById('phone').value.trim();
  var service   = document.getElementById('service').value;
  var date      = document.getElementById('date').value.trim();
  var time      = document.getElementById('time').value;

  var firstNameErr = document.getElementById('firstNameError');
  var lastNameErr  = document.getElementById('lastNameError');
  var emailErr     = document.getElementById('emailError');
  var phoneErr     = document.getElementById('phoneError');
  var serviceErr   = document.getElementById('serviceError');
  var dateErr      = document.getElementById('dateError');
  var timeErr      = document.getElementById('timeError');
  var success      = document.getElementById('bokaSuccess');

  firstNameErr.textContent = '';
  lastNameErr.textContent  = '';
  emailErr.textContent     = '';
  phoneErr.textContent     = '';
  serviceErr.textContent   = '';
  dateErr.textContent      = '';
  timeErr.textContent      = '';
  success.textContent      = '';

  var ok = true;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstName === '') { firstNameErr.textContent = 'Förnamn är obligatoriskt.'; ok = false; }
  if (lastName === '')  { lastNameErr.textContent  = 'Efternamn är obligatoriskt.'; ok = false; }

  if (email === '') {
    emailErr.textContent = 'E-postadress är obligatorisk.';
    ok = false;
  } else if (!emailPattern.test(email)) {
    emailErr.textContent = 'Ange en giltig e-postadress.';
    ok = false;
  }

  if (phone === '')   { phoneErr.textContent   = 'Telefonnummer är obligatoriskt.'; ok = false; }
  if (service === '') { serviceErr.textContent = 'Välj en tjänst.'; ok = false; }
  if (date === '')    { dateErr.textContent    = 'Ange ett önskat datum.'; ok = false; }
  if (time === '')    { timeErr.textContent    = 'Välj en önskad tid.'; ok = false; }

  if (ok) {
    success.textContent = 'Tack! Din bokningsförfrågan har skickats. Vi återkommer inom 24 timmar.';
    document.getElementById('bokningsformular').reset();
  }
});