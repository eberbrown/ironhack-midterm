const formSubmitBtnEl = document.querySelector(".contact-form-btn");
const contactFormEl = document.querySelector("#contactForm");

function validateForm(nameInput, emailInput, phoneInput, messageInput) {
  function validateName() {
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
    if (stringPattern.test(nameInput) && nameInput.indexOf(" ") !== -1) {
      return true;
    } else {
      alert("Please enter a name. Ej. John Denver");
      return false;
    }
  }

  function validateEmail() {
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
    if (emailPattern.test(emailInput)) {
      return true;
    } else {
      alert("Please enter a valid email. Ej. name@provider.com");
      return false;
    }
  }

  function validatePhone() {
    /* \d+: This pattern matches one or more digits (0-9).
        \d is a shorthand character class that matches any digit character.
        + is a quantifier that matches one or more occurrences of the preceding element, in this case, digits. */
    const digitsPattern = /^\d+$/;
    if (digitsPattern.test(phoneInput) || phoneInput === "") {
      return true;
    } else {
      alert("Please enter a valid phone number. Ej. 650998365");
      return false;
    }
  }

  function validateMessage() {
    /* [A-Za-zÀ-ÖØ-öø-ÿ-' \d]: This character class matches any character that falls within the following ranges:
        A-Za-z: Matches any alphabetic character, both uppercase and lowercase.
        À-ÖØ-öø-ÿ: Matches additional characters beyond the basic Latin alphabet, including accented characters.
        -' : Matches hyphens, apostrophes, and spaces.
        \d: Matches any digit character (0-9).
        +: Quantifier that matches one or more occurrences of the characters in the character class. */
    const stringPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ-' \d]+$/;
    if (messageInput !== "" && messageInput.length < 250) {
      return true;
    } else {
      alert("Please enter your message. Ej. Thank you for your products!");
      return false;
    }
  }

  if ( validateName() && validateEmail() && validatePhone() && validateMessage() ) {
    console.log("form submitted");
  } else {
    console.log("you still need to update info");
  }

}

contactFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#fname").value;
  const emailInput = document.querySelector("#femail").value;
  const phoneInput = document.querySelector("#fphone").value;
  const messageInput = document.querySelector("#fmessage").value;
  validateForm(nameInput, emailInput, phoneInput, messageInput);
});
