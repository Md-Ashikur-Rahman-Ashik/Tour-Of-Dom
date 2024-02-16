// console.log("Hello from JS");
// console.log(document);
// console.log(document.body);

const sections = document.querySelectorAll("section");
// console.log(sections);
for(let section of sections){
    // console.log(section);
    section.style.border = "2px solid blue";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "5px";
    section.style.paddingLeft = "7px";
    section.style.backgroundColor = "lightgray";
}

// const places = document.getElementById("placesContainer");
// for(let place of places){
//     console.log(place);
// }
// places.style.backgroundColor = "yellow";

// const places = document.getElementById("placesContainer");
// places.classList.add("yellowBg");

const places = document.getElementById("placesList");
// console.log(places);

const li = document.createElement("li");
li.innerText = "Cumilla";

places.appendChild(li);
console.log(places);