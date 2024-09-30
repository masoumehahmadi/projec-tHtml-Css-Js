const $ = document;

const emailInput = $.querySelector(".email-input");
const passwordInput = $.querySelector(".password-input");
const submitbtn = $.querySelector(".signin-btn");
const inpuIcon = $.querySelector(".input-icon");
const inpuIconPassword = $.querySelector(".input-icon-2");
const hidePassword = $.querySelector(".hide-password");
const showPassword = $.querySelector(".show-password");
const iconEmail = $.querySelector(".icon-email");
const iconPassword = $.querySelector(".icon-password");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitbtn.addEventListener("click", function validationInput() {
  validInput();
});
showPassword.addEventListener("click", function showPswd() {
  passwordInput.type = "text";
});
hidePassword.addEventListener("click", function hidePswd() {
  passwordInput.type = "password";
});
passwordInput.addEventListener("input", () => {
  iconDisplay(passwordInput.value, iconPassword);
});
emailInput.addEventListener("input", () => {
  iconDisplay(emailInput.value, iconEmail);
});

function iconDisplay(icon, inpClass) {
  if (icon) {
    inpClass.style.display = "none";
  } else {
    inpClass.style.display = "block";
  }
}
function validInput() {
  const emptyDivEmail = $.querySelector(".inp-validation-email");
  const emptyDivPass = $.querySelector(".inp-validation-pass");

  if (emptyDivEmail) {
    emptyDivEmail.remove();
    emailInput.classList.remove("validation");
  }
  if (emptyDivPass) {
    emptyDivPass.remove();
    passwordInput.classList.remove("validation");
  }

  if (!emailInput.value || !emailInput.value.trim()) {
    const divValidation = $.createElement("div");
    divValidation.innerHTML = "The field cannot be empty";
    divValidation.classList.add("inp-validation-email");
    emailInput.className = "email-input validation";
    inpuIcon.appendChild(divValidation);
  } else if (!emailRegex.test(emailInput.value)) {
    console.log(emailRegex.test(emailInput.value));
    const divValidation = $.createElement("div");
    divValidation.innerHTML = "The email is not valid";
    divValidation.classList.add("inp-validation-email");
    emailInput.className = "email-input validation";
    inpuIcon.appendChild(divValidation);
  }
  if (!passwordInput.value) {
    const divValidationPassword = $.createElement("div");
    divValidationPassword.innerHTML = "The field cannot be empty";
    divValidationPassword.classList.add("inp-validation-pass");
    passwordInput.className = "password-input validation";
    inpuIconPassword.appendChild(divValidationPassword);
  }
}
