let name = document.getElementById("inputname");
let email = document.getElementById("inputemail");
let message = document.getElementById("inputmessage");

/**
 * Function that validates the name of the user 
 */
function validateName() {
    name.classList.remove("invalid-input");

    if (name.value.trim() === "") {
        name.classList.add("invalid-input");
        name.placeholder = "*Please enter your name!";
        return false;
    }

    if (name.value.length < 3) {
        name.classList.add("invalid-input");
        return false;
    }

    if (!/^[\p{L}\s\-']+$/u.test(name.value)) {
        name.classList.add("invalid-input");
        return false;
    }

    return true;
}

/**
 * Function that validates the email of the user 
 */
function validateEmail(){
    email.classList.remove("invalid-input");

    if (email.value.trim() === "") {
        email.classList.add("invalid-input");
        email.placeholder = "*Please enter your name!";
        return false;
    }

    if (email.value.length < 3) {
        email.classList.add("invalid-input");
        return false;
    }

    return true;
}

/**
 * Function that validates the message of the user 
 */
function validateMessage(){
    message.classList.remove("invalid-input");

    if (message.value.trim() === "") {
        message.classList.add("invalid-input");
        message.placeholder = "*Please enter your name!";
        return false;
    }

    if (message.value.length < 3) {
        message.classList.add("invalid-input");
        return false;
    }

    return true;
}


/**
 * Validation function for the contact part of the page 
 */
function sendMessage(){

}


function sendButtonActivation(){

    if(validateEmail && validateMessage && validateName === true){
        document.querySelector("contact-me-send-button").classList.add("contact-me-send-button-true");
        document.querySelector("contact-me-send-button-text").classList.add("contact-me-send-button-text-true");
    }
}