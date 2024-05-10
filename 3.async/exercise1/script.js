const body = document.body;


fetch("data.json")
    .then((response => response.json()))
    .then((cities) => {
        for (city of cities) {
            body.innerHTML += 
            `<ul>
                <li><strong>City Name: </strong>${city.name}</li>
                <li><strong>Continent: </strong>${city.continent}</li>
                <li><strong>Inhabitants: </strong>${city.population}</li>
            </ul>`
        }
    })