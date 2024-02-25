const addInput = document.querySelector('#addinput');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

function foo() {
    output.textContent = addInput.value;
}


button.addEventListener('click', foo) 
