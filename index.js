const $ = document;

const emailInput = $.querySelector(".email-input");
const passwordInput = $.querySelector(".password-input");
const submitbtn = $.querySelector(".signin-btn");
const inpuIcon = $.querySelector(".input-icon");
const inpuIconPassword = $.querySelector(".input-icon-2");
const inpuIconName = $.querySelector(".input-icon-person");
const inputIconRepeatPass = $.querySelector(".input-icon-repeatPass");

const hidePassword = $.querySelector(".hide-password");
const showPassword = $.querySelector(".show-password");
const iconEmail = $.querySelector(".icon-email");
const iconPassword = $.querySelector(".icon-password");
const iconPerson = $.querySelector(".icon-person");

const nameInput = $.querySelector(".name-input");
const repeatPassword = $.getElementById("repeat-pass");
const showPass = $.getElementById("show-password");
const hidePass = $.getElementById("hide-password");
const iconPass = $.getElementById("icon-password");



const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitbtn.addEventListener("click", function validationInput() {
  validInput();
});
//show -hide password
showPassword.addEventListener("click", function showPswd() {
  passwordInput.type = "text";
});

hidePassword.addEventListener("click", function hidePswd() {
  passwordInput.type = "password";
});
if(showPass||hidePass||repeatPassword||nameInput){
  showPass.addEventListener("click", function showPswd() {
    repeatPassword.type = "text";
  });
  
  hidePass.addEventListener("click", function hidePswd() {
    repeatPassword.type = "password";
  });
  repeatPassword.addEventListener("input", () => {
    iconDisplay(repeatPassword.value, iconPass);
  });
  nameInput.addEventListener("input", () => {
    iconDisplay(nameInput.value, iconPerson);
  });
}

////////////

if($.querySelector('.title').textContent==='Sign up'){
  $.querySelector('.box-blur').style.display='block';
}
// icon in input
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
/////////////////////
function validInput() {
  const emptyDivEmail = $.querySelector(".inp-validation-email");
  const emptyDivPass = $.querySelector(".inp-validation-pass");
  const emptyDivname = $.querySelector(".inp-validation-name");
  const emptyDivrepeat = $.querySelector(".inp-validation-repeat-pass");

  if (emptyDivrepeat) {
    emptyDivrepeat.remove();
    emptyDivrepeat.classList.remove("validation");
  }

  if (emptyDivEmail) {
    emptyDivEmail.remove();
    emailInput.classList.remove("validation");
  }
  if (emptyDivPass) {
    emptyDivPass.remove();
    passwordInput.classList.remove("validation");
  }
  if (emptyDivname) {
    emptyDivname.remove();
    nameInput.classList.remove("validation");
  }
  if(nameInput){//for handle error login page
    if (!nameInput.value || !nameInput.value.trim()) {
      const divValidationName = $.createElement("div");
      divValidationName.innerHTML = "The field cannot be empty";
      divValidationName.classList.add("inp-validation-name");
      nameInput.className = "name-input validation";
      inpuIconName.appendChild(divValidationName);
    }
  }

  if (!emailInput.value || !emailInput.value.trim()) {
    const divValidation = $.createElement("div");
    divValidation.innerHTML = "The field cannot be empty";
    divValidation.classList.add("inp-validation-email");
    emailInput.className = "email-input validation";
    inpuIcon.appendChild(divValidation);
  } else if (!emailRegex.test(emailInput.value)) {
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
  if(repeatPassword){
    if (!repeatPassword.value) {
      const divValidationPassword = $.createElement("div");
      divValidationPassword.innerHTML = "The field cannot be empty";
      divValidationPassword.classList.add("inp-validation-repeat-pass");
      repeatPassword.className = "password-input validation";
      inputIconRepeatPass.appendChild(divValidationPassword);
    }
  
    if (passwordInput.value !== repeatPassword.value) {
      validationPassword();
    }
  }

}

function validationPassword() {
  const divValidationPassword = $.createElement("div");
  divValidationPassword.innerHTML = "Passwords do not match";
  divValidationPassword.classList.add("inp-validation-repeat-pass");
  repeatPassword.className = "password-input validation";
  inputIconRepeatPass.appendChild(divValidationPassword);
}
