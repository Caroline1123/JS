// Using timestamps, find the exact time and date we will be in 80000 hours.

// Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.

const resultField = document.querySelector(".result")
const inputField = document.querySelector("#hoursInput");
inputField.addEventListener("keyup", (e) => {
    let hours = Number(inputField.value);
    let future = showFutureDate(hours);
    resultField.innerHTML = `Future date: ${future}`
});

let showFutureDate = (h) => {
    let now = new Date();
    let futureDate = new Date(now.getTime() + h*60*60*1000)
    return futureDate.toDateString();
};
