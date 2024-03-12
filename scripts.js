let number = 0

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