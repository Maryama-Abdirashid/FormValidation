const nameInput = document.getElementById('fullname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit');

const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmError = document.getElementById('confirm-error');

[nameInput, phoneInput, emailInput, passwordInput, confirmInput].forEach(input => {
  input.addEventListener('input', validateForm);
});

function validateForm() {
  const nameValid = /^[a-zA-Z\s]+$/.test(nameInput.value);
  const phoneValid = /^\d{10,15}$/.test(phoneInput.value);
  const emailValid = /^\S+@\S+\.\S+$/.test(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;
  const confirmValid = confirmInput.value === passwordInput.value;

  nameError.textContent = nameValid ? '' : 'Enter a valid name';
  phoneError.textContent = phoneValid ? '' : 'Phone must be 10-15 digits';
  emailError.textContent = emailValid ? '' : 'Invalid email address';
  passwordError.textContent = passwordValid ? '' : 'At least 8 characters';
  confirmError.textContent = confirmValid ? '' : 'Passwords do not match';

  const allValid = nameValid && phoneValid && emailValid && passwordValid && confirmValid;
  submitButton.disabled = !allValid;
}
