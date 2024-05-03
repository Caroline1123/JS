// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

// Write a function to find how many days have passed since any point in time (after 1970).
let now = new Date();
let days = now.getTime()/1000/60/60/24;
let birthday = new Date('1991-08-30');
let oldDays = birthday.getTime()/1000/60/60/24;

const  getTimeDelta = (timeNow, timeBefore) => {
    // convert time into days
    timeNow = timeNow/1000/60/60/24;
    timeBefore = timeBefore/1000/60/60/24;
    return (timeNow - timeBefore)
}

let result = getTimeDelta(now, birthday);

const timeDisplay = document.createElement("h1");
timeDisplay.innerText = `${Math.floor(result)} days have passed between ${birthday} and ${now}`;
document.body.append(timeDisplay);