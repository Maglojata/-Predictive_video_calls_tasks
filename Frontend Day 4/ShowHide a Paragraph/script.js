const button = document.querySelector('.button');
const text = document.querySelector('.text');

button.addEventListener('click', () => {
    if (text.style.display === 'none') {
       text.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        text.style.display = 'none';
        button.textContent = 'Show';
    }
});

