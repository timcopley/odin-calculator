let numA;
let numB;
let operator;
let numResetIndicator;

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
    numA = undefined;
    numB = undefined;
    operator = undefined;
}

function numberClick(event) {
    if (event.target.classList.contains('number')) {
        const display = document.querySelector('#display');
        const clickedNumber = event.target.innerText;
        
        if (numResetIndicator) {
            numResetIndicator = undefined;
            numA = undefined;
            display.innerText = '';
        }

        display.innerText += clickedNumber;

        if (!operator) {
            numA = !numA ? +clickedNumber : +(numA + clickedNumber);
        } else {
            numB = !numB ? +clickedNumber : +(numB + clickedNumber);
        }
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

    const clickedOperator = event.target.innerText;
    const display = document.querySelector('#display');

    if (numA >= 0 && !operator && event.target.classList.contains('mathOp')) {
        operator = operators[clickedOperator];
        display.innerText += clickedOperator;
        numResetIndicator = undefined;
    } else if (numB && event.target.classList.contains('mathOp')) {
        numA = operate(numA, numB, operator);
        numB = undefined;
        operator = operators[clickedOperator];
        display.innerText = numA + clickedOperator;
        numResetIndicator = 'reset';
    } else if (clickedOperator === '=' && numA && numB && operator) {
        numA = operate(numA, numB, operator);
        numB = undefined;
        operator = undefined;
        display.innerText = numA;    
        numResetIndicator = 'reset';    
    } else if (clickedOperator === 'CLR')  {
        resetCalculator();
    }
}