// <!-- Exercise 1
// Find the timezones of :
// Anchorage (USA)
// Reykjavik (Iceland)
// Saint-Petersburg (Russia)
// And display the date and time of these cities along with the time and date of Brussels. -->

let timeZoneHour = (timeZone) => {
    let now = new Date();
    let options = {
        timeZone: timeZone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    return new Intl.DateTimeFormat('fr-FR', options).format(now);
}

let anchorage = "America/Anchorage";
let reykjavik = "Atlantic/Reykjavik";
let saintPetersburg = "Europe/Moscow";
let brussels = "Europe/Brussels";

let createDiv = (time) => {
    const body = document.body;
    let div = document.createElement("div");
    div.innerText = `${time}`;
    body.appendChild(div);
}

let anchorageTime = timeZoneHour(anchorage);
createDiv(`Anchorage:  ${anchorageTime}`);

let reykjavikTime = timeZoneHour(reykjavik);
createDiv(`Reykjavik:  ${reykjavikTime}`);

let saintPetersburgTime = timeZoneHour(saintPetersburg);
createDiv(`Saint-Petersburg:  ${saintPetersburgTime}`);

let brusselsTime = timeZoneHour(brussels);
createDiv(`Brussels:  ${brusselsTime}`);