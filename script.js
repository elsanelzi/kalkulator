//  Numbers
const numbers = document.querySelectorAll('.number');

let prevNumber = '';
let calculationOperator = '';
let currentNumber= '0';


const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

// Calculator Screen

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

numbers.forEach((number)=> {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

// Operator

const operators = document.querySelectorAll('.operator');

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    } 
    calculationOperator = operator;
    currentNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

// Equal Sign
const equalSign = document.querySelector('.equal-sign');
const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*" :
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/" :
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
};


equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

// Celar Button 

const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

// Decimal

const decimal = document.querySelector('.decimal');

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})


// Percentage

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
    let result = '';
    result = currentNumber / 100;
    updateScreen(result);
    currentNumber = result;
})

// Del
const del = document.querySelector('.del');
del.addEventListener('click', event => {
    let result = '';
    result = currentNumber.slice(0,-1);
    updateScreen(result);
    currentNumber = result;
})



















