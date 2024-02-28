async function getProjectByID(id) {
  return new Promise((resolve, reject) => {
    /* fetch(`http://localhost:8000/projects?id=${id}`) */
    fetch(`https://ih-json-server-g29f.onrender.com/projects?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });

/* try {
const response = await fetch(`http://localhost:8000/projects?id=${id}`)
const data = await response.json()
return data[0]
} catch (err) {
 throw err
} */
}

function postToDB(dataBase, objEl) {
  const jsonData = JSON.stringify(objEl);
    /* fetch(`http://localhost:8000/${dataBase}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    }) */
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

function referenceTargetBtnId() {
  const learnMoreBtnEls = document.querySelectorAll(".project-card-btn");

  learnMoreBtnEls.forEach((el) => {
    el.onclick = () => {
      const targetID = el.getAttribute("id");
      /* window.location.href = `http://127.0.0.1:5500/pages/project.html?id=${targetID}`; */
      window.location.href = `../pages/project.html?id=${targetID}`;
      return targetID;
    };
  });
}

function validateName(name) {
  /* /: Delimiters marking the beginning and end of the regular expression.
  ^: Anchor to match the beginning of the string.
  [A-Za-zÀ-ÖØ-öø-ÿ-' ]+: This pattern matches one or more characters that meet the following criteria:
      [...]: Square brackets denote a character set, matching any single character within the set.
      A-Za-z: Matches any alphabetic character, both uppercase and lowercase.
      À-ÖØ-öø-ÿ: Matches additional characters beyond the basic Latin alphabet, including accented characters in various languages.
      -' : Matches hyphen -, apostrophe ', and space characters.
      +: Quantifier that matches one or more occurrences of the preceding character set. 
  $: Anchor to match the end of the string.*/
  const stringPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ-' ]+$/;
  if (stringPattern.test(name) && name.indexOf(" ") !== -1) {
    return true;
  } else {
    /* alert("Please enter a name. Ej. John Denver"); */
    return false;
  }
}

function validateEmail(email) {
  /* [^\s@]+: This part matches one or more characters that are not whitespace (\s) or @.
  @: Matches the @ symbol.
  @[^\s@]+: Matches the domain part of the email, which is similar to the pattern before the @.
  \.: Matches a dot (.). Note that \ is used to escape the dot, as dot has special meaning in regular expressions.
  [^\s@]+: Matches one or more characters that are not whitespace (\s), @, or `.`.

      So, this regular expression pattern checks if the input string:
      Starts with one or more characters that are not whitespace or @.
      Followed by @.
      Followed by one or more characters that are not whitespace or @.
      Followed by ..
      Ends with one or more characters that are not whitespace, @, or .. */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    /* alert("Please enter a valid email. Ej. name@provider.com"); */
    return false;
  }
}

function validatePhone(phone) {
  /* \d+: This pattern matches one or more digits (0-9).
      \d is a shorthand character class that matches any digit character.
      + is a quantifier that matches one or more occurrences of the preceding element, in this case, digits. */
  const digitsPattern = /^\d+$/;
  if (digitsPattern.test(phone) || phone === "") {
    return true;
  } else {
    /* alert("Please enter a valid phone number. Ej. 650998365"); */
    return false;
  }
}

function validateMessage(message) {
  if (message !== "" && message.length < 250) {
    return true;
  } else {
    /* alert("Please enter your message. Ej. Thank you for your products!"); */
    return false;
  }
}

export { getProjectByID, referenceTargetBtnId, postToDB, validateName, validateEmail, validatePhone,validateMessage };
