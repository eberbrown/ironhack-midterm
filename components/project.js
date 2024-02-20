import { getProjectByID, referenceTargetBtnId } from "../components/utils.js";
import { generateProjectDescEl } from "../components/htmlElement.js";

async function addProjectEl(id) {
  try {
    const { image, name, description, PRid = id, content, completed_on } = await getProjectByID(id);
    const projectSection = document.querySelector(".project-description-section");
    const projectElement = generateProjectDescEl(image, name, description, PRid, content, completed_on);
    projectSection.appendChild(projectElement);
  } catch (err) {
    console.error(err);
  }
  //referenceTargetBtnId();
}

function projectLoad() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('id') && searchParams.get('id') <= 6 && 0 < searchParams.get('id')) {
        addProjectEl(searchParams.get('id'))
    } else {
        addProjectEl(1);
    }
}

projectLoad();