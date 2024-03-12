let number = 0
let incrementValue = localStorage.getItem('incremenValue') || 5;
let limitValue = localStorage.getItem('limitValue') || 50;

document.getElementById('increment').value = incrementValue;
document.getElementById('limit').value = limitValue;


const erBoom = document.getElementById('boom')

const numberTag = document.getElementById('number')

const onIncrementClick = () => {
    number = number + 1
    checkBoom()
    console.log(number)
}

const onDecrementClick = () => {
    number = number - 1
    checkBoom()
    console.log(number)
}

const checkBoom = () => {
    if(number >= 35) {
        erBoom.style.display = 'block'
    } else {
        erBoom.style.display = 'none'
    }
}