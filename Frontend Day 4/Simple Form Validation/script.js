const emailForm = document.getElementById('emailform');
const submit = document.getElementById('submit');
const Input = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

emailForm.addEventListener('submit', function(e) {
    if (Input.value === '') {
        errorMessage.textContent = 'Please enter an email address';
        e.preventDefault();
    }
});