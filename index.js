import { getProjectByID } from "./components/utils.js";
import { generateCardEl } from "./components/cardElement.js";

/* const projectInfo = async (id) => {
  try {
    const projectData = await getProjectByID(id);
    return projectData;
  } catch (err) {
    console.error(err);
  }
};
 */
async function addCardEl(id) {
  try {
    const { image, name, description, PRid = id } = await getProjectByID(id);
    const cardsListEl = document.querySelector(".project-cards-list");
    const cardElement = generateCardEl(image, name, description, PRid);
    cardsListEl.appendChild(cardElement);
  } catch (err) {
    console.error(err);
  }
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
