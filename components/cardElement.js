function generateCardEl(imgURL, name, description, PRid) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("project-card");
  cardElement.innerHTML = `<div>
        <img src="${imgURL}" alt="" class="card-image">
    </div>
    <div class="card-content">
        <p class="body-intro-text-m project-card-name">${name}</p>
        <p class="headline-text-r project-card-description">${description}</p>
        <button class="headline-text-r learn-more-btn" id="${PRid}">Learn more</button>
    </div>`;
    return cardElement;
}



export { generateCardEl };
