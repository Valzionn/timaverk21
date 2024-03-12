let number = 0;

const erBoom = document.getElementById('boom');
const numberTag = document.getElementById('number');
const limit = document.getElementById('limit');

limit.value = localStorage.getItem('limit') || 1;

const onIncrementClick = () => {
    number += parseInt(limit.value);
    checkBoom();
    console.log(number);
};

const onDecrementClick = () => {
    number -= parseInt(limit.value);
    checkBoom();
    console.log(number);
};

const checkBoom = () => {
    if (number >= 35) {
        erBoom.style.display = 'block';
    } else {
        erBoom.style.display = 'none';
    }
};

limit.addEventListener('input', () => {
    localStorage.setItem('limit', limit.value);
});
