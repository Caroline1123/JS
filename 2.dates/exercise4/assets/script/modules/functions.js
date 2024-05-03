import {switchTime} from "./../script.js"

let displayTime = () => {
    const timeDiv = document.querySelector(".time");
    let date = new Date();
    let optionsFR = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    let optionsUS = {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    let dateFR = new Intl.DateTimeFormat('fr-FR', optionsFR).format(date);
    let dateUS = new Intl.DateTimeFormat('us-US', optionsUS).format(date);
    if (switchTime.classList.contains('us')) {
        timeDiv.innerHTML = `${dateUS}`;
    }
    else {
        timeDiv.innerHTML = `${dateFR}`;
    }
}

export { displayTime };