document.addEventListener("DOMContentLoaded", () => {
  const eyeToggle = document.querySelector("#eye");
  const passwordInput = document.querySelector("#password-Input");

  eyeToggle.addEventListener("click", () => {
    console.log("ok");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeToggle.src = "./icons/eye.svg";
    } else {
      passwordInput.type = "password";
      eyeToggle.src = "./icons/eyeoff.svg";
    }
  });
});

/*const errorMessages = document.querySelector(".error-message");
const emailInput = document.querySelector(".email-input");
const questions = document.querySelector(".question");
const button = document.querySelector(".login");

const validateEmail = (emailInput) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(emailInput).toLowerCase());
};

emailInput.addEventListener("blur", () => {
  if (!validateEmail(emailInput.value)) {
    errorMessages.style.visibility = "visible";
    questions.style.textDecoration = "underline";
    emailInput.style.border = "1px solid red";
  } else {
    errorMessages.style.visibility = "hidden";
    questions.style.textDecoration = "none";
    emailInput.style.border = "1px solid var(--sötét-zöld)";
  }
});

*/
