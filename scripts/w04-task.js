/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "David Labra Gaona",
    photo: "images/placeholder.jpeg",
    favoriteFoods: [
        'Milanesa',
        'Potato',
        'Shrimp',
        'Salad'
    ],
    hobbies: [
        'flying',
        'scuba diving'

    ],
    placesLived: [
    ]
};






/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
        place: "United Stated",
        length: "2 years"
    });
myProfile.placesLived.push(
    {
        place: "Spain",
        length: "6 months"
    }
);




/* DOM Manipulation - Output */

/* Name */
let name = document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let photo = document.querySelector("#photo");
photo.setAttribute("src", "images/placeholder.jpeg");
photo.setAttribute("alt", myProfile.name);



/* Favorite Foods List*/
const foods = myProfile.favoriteFoods.forEach( x => {
    const element = document.createElement("li");
    element.textContent = x;
    document.querySelector("#favorite-foods").appendChild(element);
});


/* Hobbies List */
const hobbies = myProfile.hobbies.forEach( x => {
    const element = document.createElement("li");
    element.textContent = x;
    document.querySelector("#hobbies").appendChild(element);
});

/* Places Lived DataList */
myProfile.placesLived.forEach( (x) => {
    const dtElement = document.createElement("dt");
    dtElement.innerText = x.place;
    const ddElement = document.createElement("dd");
    ddElement.innerText = x.length;
    const placesElement = document.querySelector("#places-lived");
    placesElement.appendChild(dtElement);
    placesElement.appendChild(ddElement);
});

