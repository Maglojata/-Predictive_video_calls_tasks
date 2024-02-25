const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const aqua = document.querySelector('.aqua');
const yellow = document.querySelector('.yellow');


red.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});

blue.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});

aqua.addEventListener('click', function(){
    document.body.style.backgroundColor = 'aqua';
});

yellow.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
});