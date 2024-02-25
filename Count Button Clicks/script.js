const button = document.querySelector('.button');
const outcount = document.querySelector('.outcount');

let count = 0;

function update_count(){
    outcount.textContent = count;
}

button.addEventListener('click', function(){
    ++count;
    update_count();
});


