// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  /*let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);

  //For each
  const foodsElement = document.querySelector("#favorite-foods");
  function createAndAppendFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
  }

  myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

  //map

  foodsElement = document.querySelector("#favorite-foods");
  function mapFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
  }
  const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
  foodsElement.innerHTML = foodListElements.join('');46

  // Step 2
  let hobbies = myInfo.hobbies;
  hobbies.forEach(element => {
    let c = document.createElement("li");
    c.textContent = element;
    document.querySelector("#hobbies").appendChild(c);
  });

  // Step 3
  let places = myInfo.placesLived;
  places.map(element => {
    let li = document.createElement("li");
    li.textContent = element.place;
    document.querySelector("#places-lived").appendChild(li);
  });
*/

  //activity 3
  let places = myInfo.placesLived;
  /*places.map(element => {
    let li = document.createElement("li");
    li.textContent = element.place;
    document.querySelector("#places-lived").appendChild(li);
  });*/

  //1. 
  function foodElement(food) {
    return `<li>${food}</li>`;
  }

  //2.
  function placeElement(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }

  //3.
  function transformFunction(list, callback) {
    //result = list.map(element => callback(element));
    result = list.map(callback);
    return result.join('');
  }

  document.querySelector("#places-lived").innerHTML = transformFunction(places, placeElement);
  document.querySelector("#favorite-foods").innerHTML = transformFunction(myInfo.favoriteFoods, foodElement);

  const DAYS = 6;
  const LIMIT = 30;
  let studentReport = [11, 42, 33, 64, 29, 37, 44];

  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT)
      console.log(studentReport[i]);
  }

  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
    i++;
  }

  studentReport.forEach(function(item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }