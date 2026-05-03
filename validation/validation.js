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
    } else { emailError.innerHTML = ""; }
    return true;
}

/**
 * Function that validates the message of the user 
 */
function validateMessage() {
    message.classList.remove("invalid-input");

    if (message.value.trim() === "") {
        message.classList.add("invalid-input");
        message.placeholder = "*Please enter your name!";
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
function sendMessage() {
    
    if(isFormValid()){
        document.body.insertAdjacentHTML('beforeend', messageSentTemplate());
        const overlay = document.querySelector('.message-sent-overlay');
        setTimeout(() => {
        overlay.remove();
    }, 3000)
    }
    name.value = "";
    email.value = "";
    message.value = "";
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
    let valid = isFormValid();
    if (valid) {
        document.querySelector(".contact-me-send-button")
            .classList.add("contact-me-send-button-true");
        document.querySelector(".contact-me-send-button-text")
            .classList.add("contact-me-send-button-text-true");
    } else {
        document.querySelector(".contact-me-send-button")
            .classList.remove("contact-me-send-button-true");
        document.querySelector(".contact-me-send-button-text")
            .classList.remove("contact-me-send-button-text-true");
    }
    checkBoxValidation(valid);
}

/**
 * Function that changes the shape of the checkbox regarding its validity
 */
function checkBoxValidation(valid) {
    let checkbox = document.getElementById("check-box-img");
    let link = document.getElementById("privacypolicylink");
    checkbox.classList.remove("check-box-checked", "check-box-red");
    if (valid) {
        checkbox.classList.add("check-box-checked");
        link.style.color = "#89BCD9";
    } else {
        checkbox.classList.add("check-box-red");
        link.style.color = "#E44C36";
    }
}