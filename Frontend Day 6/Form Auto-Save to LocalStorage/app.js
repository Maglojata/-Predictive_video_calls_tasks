const registerBtn = document.getElementById("registerbtn");
const loginInput = document.getElementById("login");
const pswInput = document.getElementById("psw");
const pswRepeatInput = document.getElementById("psw-repeat");


registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    saveInfo();
})

function checkInputs() {
    if (loginInput.value.length >= 6 && pswInput.value.length >= 6 && pswRepeatInput.value === pswInput.value) {
        alert(`you have registered`);
    } else {
        alert(`something went wrong`);
    }
}

function saveInfo() {
    localStorage.setItem("login", JSON.stringify(loginInput.value));
    localStorage.setItem("password", JSON.stringify(pswInput.value));
}