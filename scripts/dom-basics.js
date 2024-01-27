const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.append(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of the image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);

const newP = document.createElement("p");
newP.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);
document.body.appendChild(newSection);