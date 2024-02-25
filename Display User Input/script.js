const addInput = document.querySelector('#addinput');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

function foo() {
    output.textContent = addInput.value;
}


button.addEventListener('click', foo) 

// const form = document.forms[0];
// form.addEventListener('click', (event) => {
//    event.preventDefault();
//    if(event.target.innerText === 'delete') {
//       event.target.parentElement.remove()
//    } else if(event.target.innerText === 'add') {
//        let newItem = document.createElement('li');
//        newItem.innerHTML = `<span>${document.getElementById('addInput').value} </span> <button>delete</button>`
//        document.getElementById('list').append(newItem)
//    }
// })
// const items = Array.from(document.getElementsByClassName('items'));
// const search = document.getElementById('search');
// search.addEventListener('keyup',(event) => {
//      items.filter(el => {
//          if(!el.innerText.toUpperCase().includes(event.target.value.toUpperCase())) {
//              el.parentElement.style.display = 'none'
//          } else {
//             el.parentElement.style.display = 'block'
//          }
//      })
// })