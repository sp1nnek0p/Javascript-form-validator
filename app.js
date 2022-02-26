const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show error message and red border
function showError(element, message) {
    const formControl = element.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success message and green Border
function showSuccess(element) {
    const formControl = element.parentElement;
    formControl.className = 'form-control success';
}

// Function to check every field has a value
function checkRequired(elementArray) {
    elementArray.forEach(function(e) {
        if (e.value.trim() === '') {
            showError(e, `${getProperCase(e.id)} is required`);
        }
        else {
            showSuccess(e);
        };
    });
}

// Check if the passwords match (simple)
// You can change this to take values
function checkPasswordMatch() {
    if (password.value !== password2.value) {
        showError(password2, 'Passwords does not match');
    } 
    else if (password2.value !== '' && password.value === password2.value){
        showSuccess(password2);
    }
}

// Check Min and Max length of input value
function checkLength(element, min, max) {
    if (element.value.length < min && element.value !== '') {
        showError(element, `${getProperCase(element.id)} can not be less than ${min} characters`);
    } else if (element.value.length > max && element.value !== '') {
        showError(input, `${getProperCase(element.id)} can not be more than ${max} characters`);
    }
}

// Check valid Email
function checkValidEmail(elementEmail) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!elementEmail.value.toLowerCase().match(regex ) && !elementEmail.value !== '') {
        showError(elementEmail, `${getProperCase(elementEmail.id)} has to be formated corectly`)
        }
    }

// Function takes a string and returns proper case String 
function getProperCase(inputString) {
    inputString = inputString.toLowerCase();

    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
    
// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkPasswordMatch();
    checkValidEmail(email);
});

