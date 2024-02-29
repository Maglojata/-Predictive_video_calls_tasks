const username = document.getElementById("username");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("")
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


submit.addEventListener('click', function(event) {
    if(username.value.trim === "") {
        errorName.textContent = "Please enter name"; 
        event.preventDefault()
    }

    if (emailRegex.test(email.value)) {
        errorEmail.textContent = "Please enter valid email address";
        event.preventDefault()
    }
    
    
});



// emailForm.addEventListener('submit', function(e) {
//     if (Input.value === '') {
//         errorMessage.textContent = 'Please enter an email address';
//         e.preventDefault();
//     }
// });


// if(emailRegex.test(email.value)) 
// {
//     emailLabel.style.display = "none";