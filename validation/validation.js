let name = document.getElementById("inputname");
let email = document.getElementById("inputemail");
let message = document.getElementById("inputmessage");

let nameError = document.getElementById("errorname");
let emailError = document.getElementById("erroremail");
let messageError = document.getElementById("errormessage");


/**
 * Function that validates the name of the user 
 */
function validateName() {
    name.classList.remove("invalid-input");

    if (name.value.trim() === "") {
        name.classList.add("invalid-input");
        name.placeholder = "*Please enter your name!"
        return false;
    }
    if (name.value.length < 3) {
        name.classList.add("invalid-input");
        nameError.innerHTML = `<p class="error-message" data-i18n="threeCharactersNeeded">*At least 3 characters needed!</p>`
        return false;
    }
    if (!/^[\p{L}\s\-']+$/u.test(name.value)) {
        name.classList.add("invalid-input");
        nameError.innerHTML = `<p class="error-message" data-i18n="noSpecialCharacters">*No special characters allowed!</p>`
        return false;
    } else { nameError.innerHTML = ""; }
    return true;
}

/**
 * Function that validates the email of the user 
 */
function validateEmail() {
    email.classList.remove("invalid-input");
    if (email.value.trim() === "") {
        email.classList.add("invalid-input");
        email.placeholder = "*Please enter your email!";
        return false;
    }
    if (email.value.length < 3) {
        email.classList.add("invalid-input");
        emailError.innerHTML = `<p class="error-message" data-i18n="threeCharactersNeeded">*At least 3 characters needed!</p>`
        return false;
    } if (!/^[^\s@.]+(\.[^\s@.]+)*@[^\s@.]+(\.[^\s@.]+)+$/.test(email.value.trim())){
        email.classList.add("invalid-input");
        emailError.innerHTML = `<p class="error-message" data-i18n="validEmail">*Please enter a valid email address!</p>`
        return false;
    }else { emailError.innerHTML = ""; }
    return true;
}

/**
 * Function that validates the message of the user 
 */
function validateMessage() {
    message.classList.remove("invalid-input");
    if (message.value.trim() === "") {
        message.classList.add("invalid-input");
        message.placeholder = "*Please enter your message!";
        return false;
    }
    if (message.value.length < 5) {
        message.classList.add("invalid-input");
        messageError.innerHTML = `<p class="error-message" data-i18n="fiveCharactersNeeded">*At least 5 characters needed!</p>`
        return false;
    } else { messageError.innerHTML = ""; }
    return true;

}


/**
 * Validation function for the contact part of the page 
 */
async function sendMessage() {
    if (!isFormValid()) return;
    let checkbox = document.getElementById('check-box-img');
    if (!checkbox.classList.contains('check-box-checked'))
        return checkbox.classList.remove('vibrate'), void checkbox.offsetWidth, checkbox.classList.add('vibrate');
    let values = ['inputname', 'inputemail', 'inputmessage']
        .map(id => document.getElementById(id).value);
    let response = await fetch('https://halid-crnkic.at/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: values[0], email: values[1], message: values[2] })
    });
    if ((await response.json()).success)
        document.body.insertAdjacentHTML('beforeend', messageSentTemplate()),
        setTimeout(() => document.querySelector('.message-sent-overlay')?.remove(), 1500),
        ['inputname', 'inputemail', 'inputmessage'].forEach(id => document.getElementById(id).value = '');
}

/**
 * 
 * @returns if the form is valid or not
 */
function isFormValid() {
    return validateName() && validateEmail() && validateMessage();
}

/**
 * When clickin on the button to confirm the privacy policy it first gets tested if all of the input fields are valid
 */
function sendButtonActivation() {
    let checkbox = document.getElementById("check-box-img");
    let active = isFormValid() && !checkbox.classList.contains("check-box-checked");

    checkbox.classList.toggle("check-box-checked", active);
    checkbox.classList.toggle("check-box-red", !isFormValid());

    document.getElementById("privacypolicylink").style.color =
        active ? "#89BCD9" : "#E44C36";

    document.querySelector(".contact-me-send-button")
        .classList.toggle("contact-me-send-button-true", active);

    document.querySelector(".contact-me-send-button-text")
        .classList.toggle("contact-me-send-button-text-true", active);
}
