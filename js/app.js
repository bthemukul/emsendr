//Variables
const sendBtn = document.getElementById('sendBtn');


//Event Listeners
eventListeners();
function eventListeners(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

}


//Functions
//App Initialization
function appInit(){
    //Disabled on default load
    sendBtn.disabled = true;
}