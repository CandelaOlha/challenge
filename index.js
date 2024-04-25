const suscribeButton = document.querySelector("#suscribeButton");
const popup = document.querySelector("#popup");
const closePopupButton = document.querySelector("#closePopupButton");
const subscriptionForm = document.querySelector("#subscriptionForm");
const emailInput = document.querySelector("#email");
const validationText = document.querySelector(".validation-text");

suscribeButton.onclick = () => (popup.style.display = "block");

closePopupButton.onclick = () => (popup.style.display = "none");

const validateEmail = (email) => {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regEx.test(email);
};

const displayValidationText = (str, color) => {
  validationText.textContent = str;
  validationText.style.color = color;
  validationText.style.display = "block";
};

subscriptionForm.onsubmit = (e) => {
  e.preventDefault();

  if (emailInput.value.length === 0) {
    displayValidationText("You must enter an email.", "red");
  } else {
    validateEmail(emailInput.value)
      ? displayValidationText("You have successfully subscribed!", "green")
      : displayValidationText("You must enter a valid email.", "red");
  }
};
