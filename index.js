let numA;
let numB;
let operator;
let numResetIndicator;

const display = document.querySelector('#display');

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

function resetCalculator() {
    display.innerText = '';
    numA = undefined;
    numB = undefined;
    operator = undefined;
}

function numberClick(event) {
    if (event.target.classList.contains('number')) {
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
    if (event.target.classList.contains('mathOp')) {
        mathOpClick(event);
    } else if (event.target.classList.contains('equals')) {
        equalsClick(event);
    } else if (event.target.classList.contains('clear')) {
        clearClick(event);
    }
}

function mathOpClick(event) {
    const operators = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '/': divide,
    }

    const clickedOperator = event.target.innerText;

    if (typeof numA === 'number' && !operator) {
        operator = operators[clickedOperator];
        display.innerText += clickedOperator;
        numResetIndicator = undefined;
    } else {
        performOperation(operators[clickedOperator]);
        display.innerText += clickedOperator;
    }
}

function isValidOperation() {
    return (operator === divide && numB === 0) ? false : true;
}

function computeResult() {
    return operator(numA, numB);
}

function equalsClick(event) {
    performOperation();  
}

function performOperation(nextOp = null) {
    if (typeof numA === 'number' && typeof numB === 'number' && operator) {
        if (isValidOperation()) {
            const result = computeResult();
            numA = +result;
            numB = null;
            operator = nextOp;
            display.innerText = result;
            numResetIndicator = nextOp ? null : 'reset';
        } else {
            display.innerText = "You done messed up! Hit CLR and try something else."
        }
    }      
}

function clearClick(event) {
    resetCalculator();
}