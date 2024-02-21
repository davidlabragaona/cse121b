const baseURL = "https://api.github.com";
var userData;
var repoData;

/**********************
* Service Functions      
**********************/

//Generic functions to fetch data from an URL:
async function fetchURLCallback(url, callback) {
    const data = await fetchURL(url);
    await callback(data.data);
}

async function fetchURL(url) {
    const response = await fetch(url);
    let resObj = {};
    //console.log(response);
    if (response.ok) {
      const data = await response.json();
      return resObj = {error: false,
                        data: data};
    } else {
        return {error: true,
                data: undefined};
    }
}

function reset() {
    document.querySelector("#userResults").innerHTML = "";
    document.querySelector("#userRepositories").innerHTML = "";
    document.querySelector("#sort").style.display = "none";
}

/**********************
* Users Section      
**********************/
async function getUser() {
    reset();
    const userElement = document.querySelector("#username").value;
    const userURL = GetUserURL(userElement);

    userData = await fetchURL(userURL);
    if (userData.error == false) {
        ShowUserProfile(userData.data);
        repoData = await fetchURL(userData.data.repos_url);
        repoData = repoData.data;
        ShowRepositories(repoData);
        document.querySelector("#sort").style.display = "block";
    }
    else {
        alert("User not found");
    }
}

function GetUserURL(username) {
    return `${baseURL}/users/${username}`;
}

function ShowUserProfile(data) {
    //console.log(data);
    const userResults = document.querySelector("#userResults");
    const img = document.createElement("img");
    img.className = "avatar"
    img.src = data.avatar_url;
    img.alt = data.login;
    userResults.appendChild(img);
    const name = document.createElement("h3");
    name.innerText = data.name
    userResults.appendChild(name);
    const location = document.createTextNode(data.location === null? "": data.location);
    userResults.appendChild(location);

}

/*********************
 * User Repositories *
 ********************/
function ShowSize(size) {
    const value = parseInt(size);
    if (value < 1024) {
        return `${value.toFixed(2)} B`;
    } else if (value < 1048576) {
        return `${(value / 1024).toFixed(2)} KB`;
    } else if (value < (1048576 * 1024)) {
        return `${(value / 10485764).toFixed(2)} MB`;
    } else
    return `${(value / (10485764 * 1024)).toFixed(2)} GB`;

}

function ShowRepositories(data) {
    //console.log(data);
    const repositoryElement = document.querySelector("#userRepositories");
    repositoryElement.innerHTML = "";
    const titleElement = document.createElement("h3");
    titleElement.innerText = "Repositories";
    repositoryElement.appendChild(titleElement);
    const div = document.createElement("div");
    div.id = "content";
    div.innerHTML = "";
    const listElement = document.createElement("ul");
    data.forEach(element => {
        const html = `<li>
            <div>
                <h4><a href="${element.html_url}" target="_blank">${element.name}</a></h4>
                <p>${element.description === null ? "": element.description}</p>
                <p>Created: <b>${element.created_at.substring(0, 10)}</b><br/>Updated: <b>${element.updated_at.substring(0, 10)}</b></p>
                <p>Size: <b>${ShowSize(element.size)}</b></p>
                <p>${element.language === null ? "": "Language: <b>" + element.language}</b></p>
            </div>
        </li>`;
        listElement.innerHTML += html;
    });
    div.appendChild(listElement);
    repositoryElement.appendChild(div);
}

function SortRepositories(sorting) {
    //console.log(sorting.target.value);
    switch (sorting.target.value) {
        case "date":
            repoData.sort((a, b) => new Date(a.created_at) > new Date(b.created_at));
            break;
        case "desc":
            repoData.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()));
            break;
        case "asc":
        default:
            repoData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()));
            break;
    }
    ShowRepositories(repoData);
}

/*******************
 * Event Listeners *
*******************/
document.querySelector("#search").addEventListener("click", getUser);
document.querySelector("#username").addEventListener("keydown", function(event) {
    if (event.keyCode === 13 || event.key === 'Enter')
        getUser();
});
document.querySelector("#mySelect").addEventListener("change", (evt) => {
    SortRepositories(evt);
})