import { postToDB, validateName, validateEmail, validatePhone, validateMessage, } from "../components/utils.js";

const contactFormEl = document.querySelector("#contactForm");
const nameInputEl = document.querySelector("#fname");
const emailInputEl = document.querySelector("#femail");
const phoneInputEl = document.querySelector("#fphone");
const messageInputEl = document.querySelector("#fmessage");
const nameErrMsgEl = document.querySelector(".name-err-msg");
const emailErrMsgEl = document.querySelector(".email-err-msg");
const phoneErrMsgEl = document.querySelector(".phone-err-msg");
const msgErrMsgEl = document.querySelector(".msg-err-msg");

class FormDataClass {
  constructor(fname, femail, fphone, fmessage) {
    this.fullName = fname;
    this.email = femail;
    this.phoneNumber = fphone;
    this.message = fmessage;
  }
}

function validateContactForm(nameInput, emailInput, phoneInput, messageInput) {
  const nameValidateReturn = validateName(nameInput);
  const emailValidateReturn = validateEmail(emailInput);
  const phoneValidateReturn = validatePhone(phoneInput);
  const messageValidateReturn = validateMessage(messageInput);
  if ( nameValidateReturn && emailValidateReturn && phoneValidateReturn & messageValidateReturn ) {
    console.log("form submitted");
    return true;
  } else {
    if (!nameValidateReturn) {
      nameErrMsgEl.classList.remove("no-show");
    } else {
      nameErrMsgEl.classList.add("no-show");
    }
    
    if (!emailValidateReturn) {
      emailErrMsgEl.classList.remove("no-show");
    } else {
      emailErrMsgEl.classList.add("no-show");
    } 
    
    if (!phoneValidateReturn) {
      phoneErrMsgEl.classList.remove("no-show");
    } else {
      phoneErrMsgEl.classList.add("no-show");
    } 
    
    if (!messageValidateReturn) {
      msgErrMsgEl.classList.remove("no-show");
    } else {
      msgErrMsgEl.classList.add("no-show");
    }

    console.log("you still need to update info");
    return false;
  }
}

contactFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = nameInputEl.value;
  const emailInput = emailInputEl.value;
  const phoneInput = phoneInputEl.value;
  const messageInput = messageInputEl.value;
  if (validateContactForm(nameInput, emailInput, phoneInput, messageInput) === true) {
    const newFormMessage = new FormDataClass( nameInput, emailInput, phoneInput, messageInput );
    postToDB("formData", newFormMessage);
  }
});
