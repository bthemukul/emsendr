//Variables
const sendBtn = document.getElementById('sendBtn'),
email = document.getElementById('email'),
subject = document.getElementById('subject'),
message = document.getElementById('message'),
resetButton = document.getElementById('resetBtn'),
sendEmailForm = document.getElementById('email-form');



//Event Listeners
eventListeners();
function eventListeners(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the form
    email.addEventListener('blur', validateField );
    subject.addEventListener('blur', validateField );
    message.addEventListener('blur', validateField );

    //Reset form on button press & email send.
    resetButton.addEventListener('click', resetForm );
    // Send Email
    sendEmailForm.addEventListener('submit', sendEmail );
}


//Functions

//App Initialization
function appInit(){
    //Disabled on default load
    sendBtn.disabled = true;
}

// Send Email (Execute)
function sendEmail(e){
    e.preventDefault();
    //Show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //Show the spinner
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    //Hide spinner and show Email Send Acknowledgement
    setTimeout(function(){
            //Hide the spinner
            spinner.style.display = 'none';

            //Show the Sent Ack Image
            document.querySelector('#loaders').appendChild(sendEmailImg);

            //Refresh after an email is sent
            setTimeout(function(){
                sendEmailForm.reset();
                sendEmailImg.remove();
            },4000);
    }, 2000 );
}

/* Validation of entered data [The main Validation function which 
then calls child functions which validate on individual 
norms like length or email distinctive features.] */
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

/* Function Validate email fields (finds if @ is present or not, in the input Email Id, 
and if present then reflects the green color on the base line strip.) */
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

    // Reset the Form when the RESET key is pressed
    function resetForm(){
        sendEmailForm.reset();
    }

    //End