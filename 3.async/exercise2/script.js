const submitBtn = document.querySelector("#submit");
const nameField = document.querySelector("#nameField");
const body = document.body;
const endpoint = "https://api.agify.io/?name=";
const countrySelection = document.querySelector("#country");

submitBtn.addEventListener("click", () => {
    fetch(`https://api.agify.io?name=${nameField.value}&country_id=${countrySelection.value}`)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            addDiv(data);
        })
        .catch((error) => {
            console.log("name not found!")
        })
})

const addDiv = (result) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = 
    `
    <h3>Name: ${result.name}</h3>
    <p>Age: ${result.age}</p>
    `
    // Too lazy to make display for other data received + I made too many API requests already!
    newDiv.style.backgroundColor = "lightgrey";
    body.appendChild(newDiv);
}