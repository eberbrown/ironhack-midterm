# Circle Page

## Description
This project is a comprehensive web application that showcases various features and functionalities. It includes a landing page, project details page, contact form, and a visually appealing UI. It is designed to provide a seamless and engaging user experience.

## Technologies Used
This project utilizes HTML, CSS, and JavaScript for the frontend. Additionally, it interacts with a RESTful API implemented with JavaScript for fetching and posting data.

## Installation
To run this project locally, follow these steps:
1. Clone the repository to your local machine.
2. Open the project in your code editor.
3. Run an HTTP server or use a live server extension to visualize the project in a browser.

Be sure to have an internet connection for full functionality, as some data is fetched from external sources.

## Usage
Once the project is running, you can navigate through the landing page, explore project details, subscribe to newsletters, and fill out the contact form. Ensure that the server you are hosting the project on has internet connectivity.

## Folder Structure
The project's code is intelligently organized into separate folders for HTML, CSS, and JavaScript files. Additionally, the "components" folders contain utility functions and modules used across different pages, ensuring a modular and maintainable codebase.

The project's codebase is organized as follows:

- **css:** Contains the Cascading Style Sheets (CSS) files for styling the project's web pages.
- **js:** Houses all the JavaScript files that handle the project's interactivity and functionality.
    - **components:** Includes utility functions and modules used across different pages.
- **assets:** Stores project assets such as images, icons, and other multimedia resources.
- **pages:** Contains the HTML files for different pages within the project, including the landing page, project details page, and contact form page.
- **data:** Hosts JSON files that store data used by the project, such as project details and subscription emails. When running the code locally. 

## Code Samples
Here are some code snippets from the project files:

**util.js**
```javascript
async function getProjectByID(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://ih-json-server-g29f.onrender.com/projects?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
function postToDB(dataBase, objEl) {
  const jsonData = JSON.stringify(objEl);
    fetch(`https://ih-json-server-g29f.onrender.com/${dataBase}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}
```

## Credits
Coded by Eber Brown
Additionally, the project can use a JSON server hosted on locally.

## License

This project is licensed under the [License Name] license.

## Author

Eber Brown