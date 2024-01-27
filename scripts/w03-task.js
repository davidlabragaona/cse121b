/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let result = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = result;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    const subNumber1 = Number(document.querySelector("#subtract1").value);
    const subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => {
    return factor1 * factor2;
}

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector("#factor1").value);
    const factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}

function divideNumbers() {
    const dividend = Number(document.querySelector("#dividend").value);
    const divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", () => {
    const numericValue = document.querySelector("#subtotal").value;
    const membership = document.querySelector("#member");
    const total = document.querySelector("#total");
    let value;

    if (membership.checked)
        value = numericValue * 0.80;
    else
        value = numericValue * 1;

        total.textContent = value.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numArray.filter( x => x % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numArray.filter( x => x % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numArray.reduce((total, number) => total + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numArray.map( number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numArray.map( number => number * 2)
    .reduce((total, number) => total + number);
