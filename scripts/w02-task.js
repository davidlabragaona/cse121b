/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "David Labra Gaona";
const currentYear = 2024;
const profilePicture = "images/placeholder.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `'Profile image of ${fullName}'`);


/* Step 5 - Array */
const favfood = ['Milanesas', 'Chicken', 'Vegetables', 'Ice cream'];
foodElement.innerHTML = favfood;
const anotherFood = ['Chocolate'];
favfood.push(anotherFood);
foodElement.innerHTML += `<br>${favfood}`;
favfood.shift();
foodElement.innerHTML += `<br>${favfood}`;
favfood.pop();
foodElement.innerHTML += `<br>${favfood}`;


