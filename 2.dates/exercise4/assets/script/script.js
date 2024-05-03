import { displayTime } from './modules/functions.js'

const day = document.querySelector(".day");
const date= document.querySelector(".date");
const year= document.querySelector(".year");
const time = document.querySelector(".time");
const switchTime = document.querySelector(".time");


displayTime();

switchTime.addEventListener("click", (e) => {
    if (switchTime.classList.contains("us")) {
        switchTime.classList.remove("us");
    }
    else {
        switchTime.classList.add("us");
    }
    setInterval(displayTime, 500);
})

// Sends day data to watch display
let now = new Date();
now = now.toDateString();
now = [...now.split(" ")];

day.textContent = now[0].toUpperCase();
date.textContent = now[2] + ' ' + now[1].toUpperCase();
year.textContent = now[3];

export { switchTime };