import { postToDB, validateName, validateEmail, validatePhone, validateMessage } from "../components/utils.js";

const contactFormEl = document.querySelector("#contactForm");

class FormDataClass {
    constructor(fname, femail, fphone, fmessage) {
        this.fullName = fname;
        this.email = femail;
        this.phoneNumber = fphone;
        this.message = fmessage;
    }
}

function validateContactForm(nameInput, emailInput, phoneInput, messageInput) {
  if ( validateName(nameInput) && validateEmail(emailInput) && validatePhone(phoneInput) && validateMessage(messageInput) ) {
    console.log("form submitted");
    return true;
  } else {
    console.log("you still need to update info");
    return false;
  }
}

contactFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#fname").value;
  const emailInput = document.querySelector("#femail").value;
  const phoneInput = document.querySelector("#fphone").value;
  const messageInput = document.querySelector("#fmessage").value;
  if (validateContactForm(nameInput, emailInput, phoneInput, messageInput) === true) {
    const newFormMessage = new FormDataClass(nameInput, emailInput, phoneInput, messageInput)
    postToDB("formData", newFormMessage);
  }
  
});