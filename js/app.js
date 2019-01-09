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
    validateLength(this)

}

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