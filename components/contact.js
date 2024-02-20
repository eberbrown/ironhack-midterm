const formSubmitBtnEl = document.querySelector(".contact-form-btn");
const contactFormEl = document.querySelector("#contactForm");

function validateForm() {
  function validateName() {
    const fname = 234;
    if (fname === "") {
      return true;
    } else {
      return false;
    }
  }
  function validateEmail() {
    const fname = 234;
    if (fname === "") {
      return true;
    } else {
      return false;
    }
  }
  function validatePhone() {
    const fname = 234;
    if (fname === "") {
      return true;
    } else {
      return false;
    }
  }
  function validateMessage() {
    const fname = 234;
    if (fname === "") {
      return true;
    } else {
      return false;
    }
  }

  if (validateName() && validateEmail() && validatePhone() && validateMessage()) {
    console.log("form submitted");
  } else {
    console.log("you still need to update info");
  }
}

contactFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
});

formSubmitBtnEl.addEventListener("click", () => {
  const nameInput = document.querySelector("#fname").value;
  const emailInput = document.querySelector("#femail").value;
  const phoneInput = document.querySelector("#fphone").value;
  const messageInput = document.querySelector("#fmessage").value;
  console.log(nameInput);
  console.log(emailInput);
  validateForm();
});
