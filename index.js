let numA = 0;
let numB = 0;
let operator;

const numbers = document.querySelector('#numbers');
numbers.addEventListener('click', numberClick);

const operators = document.querySelector('#operators');
operators.addEventListener('click', operatorClick);

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

function compute() {

}

function resetCalculator() {
    const display = document.querySelector('#display');
    display.innerText = '';
    numA = 0;
    numB = 0;
    operator = null;
}

function numberClick(event) {
    const display = document.querySelector('#display');
    const clickedNumber = event.target.innerText;
    console.log(clickedNumber);

    display.innerText += clickedNumber;

    if (!operator) {
        numA = +(numA + clickedNumber);
    } else {
        numB = +(numB + clickedNumber);
    }
    
}

function operatorClick(event) {
    const operators = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '/': divide,
        '=': compute,
        'CLR': resetCalculator,
    }
    if (!operator) {
        const display = document.querySelector('#display');
        const clickedOperator = event.target.innerText;
        console.log(clickedOperator);

        operator = operators[clickedOperator];
        display.innerText += clickedOperator;
    } else {

    }


}