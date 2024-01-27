function activity1() {
    let numbers = ['one', 'two', 'three'];

    let newArray = numbers.map(number => `<li>${number}</li>`);

    let list = document.querySelector("ul");
    list.innerHTML = newArray.join("\n");
}

const grades = ["A", "B", "A"];

function gpa(grade) {
    let result;
    switch (grade) {
        case "A":
            result = 4;
            break;
        case "B":
            result = 3;
            break;
    }
    return result;
}

const gpaPoints = grades.map(gpa);

const gpaReduced = gpaPoints.reduce( (total, element) => total + element) / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const fruits6 = fruits.filter( x => x.length > 6);

const act5 = [12, 34, 21, 54];
const luckNumber = 21;
const act5res = act5.indexOf(luckNumber);

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e);
}