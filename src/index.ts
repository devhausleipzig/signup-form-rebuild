const form = document.querySelector("form") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const termsCheckbox = document.getElementById("terms") as HTMLInputElement;
const privacyPolicyCheckbox = document.getElementById("privacy-policy") as HTMLInputElement;

let attemptedSubmit = false;
let emailTouched = false;
let passwordTouched = false;

const validateEmail = function ():boolean {
  const errorMessage = document.getElementById("email-invalid");

  if (emailInput.value.length == 0 || !/.+@.+/.test(emailInput.value)) {
    errorMessage.classList.add("show");
    return false;
  }
  errorMessage.classList.remove("show");
  return true;
}

const validatePassword = function ():boolean {
  const errorMessage = document.getElementById("password-invalid");

  if (!(passwordInput.value.length >= 8 && passwordInput.value.length <= 128)) {
    errorMessage.classList.add("show");
    return false;
  }
  errorMessage.classList.remove("show");
  return true;
}

const validateTermsAndPrivacyPolicy = function():boolean {
  const errorMessage = document.getElementById("terms-and-privacy-required");

  if (termsCheckbox.checked == false || privacyPolicyCheckbox.checked == false) {
    errorMessage.classList.add("show");
    return false;
  }
 
  errorMessage.classList.remove("show");
  return true;
}

const validateAll = () => {
  let valid = true;

  if (!validateEmail()) {
    valid = false;
  }

  if (!validatePassword()) {
    valid = false;
  }

  if (!validateTermsAndPrivacyPolicy()) {
    valid = false;
  }

  return valid;
}

form.addEventListener('submit', (event) => {
  attemptedSubmit = true;
  event.preventDefault();

  if (validateAll()) {
    alert("Ok, we are creating an account")
  }
})

emailInput.addEventListener('blur', () => {
  emailTouched = true;
  validateEmail();
})
emailInput.addEventListener("input", () => {
  if (emailTouched) validateEmail();
})

passwordInput.addEventListener("blur", () => {
  passwordTouched = true;
  validatePassword();
})
passwordInput.addEventListener("input", () => {
  if (passwordTouched) validatePassword();
})

termsCheckbox.addEventListener('change', () => {
  if (attemptedSubmit) validateTermsAndPrivacyPolicy();
})

privacyPolicyCheckbox.addEventListener('change', () => {
  if (attemptedSubmit) validateTermsAndPrivacyPolicy();
})



