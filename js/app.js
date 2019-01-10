//Variables
const sendBtn = document.getElementById('sendBtn');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');



//Event Listeners
eventListeners();
function eventListeners(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the form
    email.addEventListener('blur', validateField );
    subject.addEventListener('blur', validateField );
    message.addEventListener('blur', validateField );
}


//Functions

//App Initialization
function appInit(){
    //Disabled on default load
    sendBtn.disabled = true;
}

// Validation of entered data
function validateField(){
    let error ;
    // Validate length of fields
    validateLength(this);

    if (this.type === 'email'){
        validateEmail(this);
    }

    //Check if there is any error class so assign variable 'error' and check if its === 0
    error = document.querySelectorAll('.error');

    // Check that the input are not empty.
    if(email.value !== '' && subject.value!=='' && message.value !==''){
        if(error.length === 0){
            sendBtn.disabled = false;
        }
    }
}

//Validate length of fields
function validateLength(field){
    if(field.value.length >0 ){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');        
    }

}

//Validate email fields
function validateEmail(field){
    let emailText = field.value;

    if (emailText.indexOf('@') !== -1 ){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');        
    }        
    }
