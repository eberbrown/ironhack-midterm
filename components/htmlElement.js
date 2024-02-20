function generateCardEl(imgURL, name, description, PRid) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("project-card");
  cardElement.innerHTML = `<div>
        <img src="${imgURL}" alt="" class="card-image">
    </div>
    <div class="card-content">
        <p class="body-intro-text-m project-card-name">${name}</p>
        <p class="headline-text-r project-card-description">${description}</p>
        <a class="headline-text-r learn-more-btn project-card-btn" id="${PRid}">Learn more</a>
    </div>`;
    return cardElement;
}

function generateProjectDescEl(imgURL, name, description, PRid, content, completion) {
    const projectArticle = document.createElement("article");
    projectArticle.classList.add("project-description-container");
    projectArticle.innerHTML = `<h1>${name}</h1>
    <div class="project-description-tagline">
        <p class="body-intro-text-m">${description}</p>
        <p class="body-intro-text-r">Completed on <span class="body-intro-text-r">${completion}</span></p>
    </div>
    <div class="project-description-content">
        <div>
            <img src="${imgURL}" alt="">
        </div>
        <p class="project-description body-intro-text-r">
            ${content}
        </p>
    </div>`;
    return projectArticle;
}



export { generateCardEl , generateProjectDescEl};
