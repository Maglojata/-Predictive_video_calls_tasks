const  item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');

item1.addEventListener('mouseover', (ev) => {
    ev.currentTarget.style.borderColor = 'black'; 
});

item1.addEventListener('mouseout', (ev) => {
    ev.currentTarget.style.borderColor = '';
})

item2.addEventListener('mouseover', (event) => {
    event.currentTarget.style.backgroundColor = 'aqua';
});

item2.addEventListener('mouseout', (event) => {
    event.currentTarget.style.backgroundColor = '';
});


