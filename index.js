let numA = 0;
let numB = 0;
let operator;

const numbers = document.querySelector('#numbers');
numbers.addEventListener('click', numberClick);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate( a, b, operator) {
    return operator(a, b);
}

function numberClick(event) {
    const display = document.querySelector('#display');
    const clickedNumber = event.target.innerText;
    console.log(clickedNumber);

    display.innerText = display.innerText + clickedNumber;

    numA = +(numA + clickedNumber);
}