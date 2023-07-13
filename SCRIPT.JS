const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');



 let isValid = false;
 let passwordsMatch = false;



function validateForm() {
//using contraint api
isValid = form.checkValidity();
if (!isValid){
    // style main message for ann error
message.textContent = 'please fill out all fields';
message.style.color = 'red';
messageContainer.style.borderColor = 'red';
return;
}
// check to see if passwords match
if(password1El.value === password2El.value){
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
}else {
    passwordsMatch = false;
    message.textContent = 'make sure passwords match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return
}
// if form is valid and password match 
if(isValid && passwordsMatch){
    message.textContent = 'successfuly Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
}
}

function storeFormData(){
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.website.value,
        password : form.password.value,

    };
    console.log(user);
}

function processFormData (e) {
    e.preventDefault();
    // validate form
    validateForm();
    //submit data if valid
    if (isValid&&passwordsMatch){
        storeFormData();
    }
}

//Evenet Listener 
form.addEventListener('submit',processFormData);