const baseURL = "https://api.github.com";



/**********************
* Service Functions      
**********************/

//Generic functions to fetch data from an URL:
async function fetchURLCallback(url, callback) {
    const data = await fetchURL(url);
    await callback(data);
}

async function fetchURL(url) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
}

function reset() {

}

/**********************
* Users Section      
**********************/
async function getUser() {
    const userElement = document.querySelector("#username").value;
    const userURL = GetUserURL(userElement);

    const profile = await fetchURL(userURL);
    ShowUserProfile(profile);
    
    const repos = await fetchURL(profile.repos_url);
    repos.forEach(element => {
    });
}

function GetUserURL(username) {
    return `${baseURL}/users/${username}`;
}

function ShowUserProfile(data) {
    console.log(data);
    const userResults = document.querySelector("#userResults");
    const img = document.createElement("img");
    img.className = "avatar"
    img.src = data.avatar_url;
    img.alt = data.login;
    userResults.appendChild(img);
}

/*********************
 * User Repositories *
 ********************/
function getRepositories(url) {
    return 
}

document.querySelector("#search").addEventListener("click", getUser);