// Import stylesheets & scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

var usernameInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');
var emailInput = document.querySelector('input[type="email"]');
var btn = document.querySelector('button');
var form = document.querySelector('.needs-validation');
var validFeedback = document.querySelectorAll('.valid-feedback');
var invalidFeedback = document.querySelectorAll('.invalid-feedback');

function formValidation(event) {
  // USER DATA
  var userData = {
    usernameVal: usernameInput.value,
    passwordVal: passwordInput.value,
    emailVal: emailInput.value,
  };

  // ERRORS
  //var errorData = [];
  var errorData = {
    validFeedback: 'Looks good!',
    usernameErrorPresent: 'Please enter an Username',
    passwordErrorPresent: 'Please enter a Password',
    emailErrorPresent: 'Please enter an Email.',
  };

  // USERNAME
  if (userData.usernameVal === '') {
    invalidFeedback[0].innerText = errorData.usernameErrorPresent;
  } else {
    validFeedback[0].innerText = errorData.validFeedback;
  }

  // PASSWORD
  if (userData.passwordVal === '') {
    invalidFeedback[1].innerText = errorData.passwordErrorPresent;
  } else {
    validFeedback[1].innerText = errorData.validFeedback;
  }

  // EMAIL
  if( userData.emailVal === '') {
    invalidFeedback[2].innerText = errorData.emailErrorPresent;
  } else if (userData.emailVal.indexOf('@') == -1) {
    validFeedback[2].innerText = errorData.validFeedback;
  }

  // CHECK FOR ERRORS
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
  } else {
    form.submit();
  }
}

btn.addEventListener('click', formValidation);
