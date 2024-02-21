import { getProjectByID, referenceTargetBtnId, postToDB, validateEmail } from "./components/utils.js";
import { generateCardEl } from "./components/htmlElement.js";

const subscribeFormEl = document.querySelector(".subscribeForm");

class SubscribeFormDataClass {
  constructor(femail) {
    this.email = femail;
  }
}

async function addCardEl(id) {
  try {
    const { image, name, description, PRid = id } = await getProjectByID(id);
    const cardsListEl = document.querySelector(".project-cards-list");
    const cardElement = generateCardEl(image, name, description, PRid);
    cardsListEl.appendChild(cardElement);
  } catch (err) {
    console.error(err);
  }
  referenceTargetBtnId();
}

function addCardElemets() {
    function getRandomNumbers() {
        const numbers = [];
        while (numbers.length < 3) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }

    getRandomNumbers().forEach(number => {
        addCardEl(number);
    });
}

addCardElemets();

function validateSubscribeForm(emailInput) {
  if (validateEmail(emailInput)) {
    console.log("form submitted! :)");
    return true;
  } else {
    console.log("this is not working");
    return false;
  }
}

subscribeFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector(".subscribeEmail").value;
  if (validateSubscribeForm(emailInput) === true) {
    const newSubscribeEmail = new SubscribeFormDataClass(emailInput);
    console.log(emailInput);
    postToDB("subscribeEmails", newSubscribeEmail);
  }
})

