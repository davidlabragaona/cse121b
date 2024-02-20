/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const templesElement = document.querySelector("#temples");
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(element => {
        const articleElement = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = element.templeName;
        const img = document.createElement("img");
        img.src = element.imageUrl;
        img.alt = element.location;
        articleElement.appendChild(h3);
        articleElement.appendChild(img);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok) {
        templeList = await response.json();
        displayTemples(sortTemples(templeList));
    }
}


/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let tempList = [];
    let filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            tempList = temples.filter((temple) => temple.location.includes("Utah"));
            break;
        case "notutah":
            tempList = temples.filter((temple) => !temple.location.includes("Utah"));
            break;
        case "older":
            tempList = temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case "all":
        default:
            tempList = temples;
            break;
    }
    displayTemples(sortTemples(tempList));
};

function sortTemples(list) {
    let tempList = list;
    let sorting = document.querySelector("#sort").value;
    switch (sorting) {
        case "date":
            tempList = tempList.sort((a, b) => new Date(a.dedicated) > new Date(b.dedicated));
            break;
        case "desc":
            tempList = tempList.sort((a, b) => (a.templeName < b.templeName));
            break;
        case "asc":
        default:
            tempList = tempList.sort((a, b) => (a.templeName > b.templeName));
            break;
    }
    console.log(tempList);
    return tempList;
  }

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});
document.querySelector("#sort").addEventListener("change", () => {
    filterTemples(templeList);
});