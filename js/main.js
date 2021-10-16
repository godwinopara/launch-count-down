const day = document.querySelector(".days p");
const hour = document.querySelector(".hours p");
const minutes = document.querySelector(".minutes p");
const seconds = document.querySelector(".seconds p");

let current =
  Number(day.innerHTML) + Number(hour.innerHTML) + Number(minutes.innerHTML);
let secondsNumber = Number(seconds.innerHTML);
let minutesNumber = Number(minutes.innerHTML);
let hoursNumber = Number(hour.innerHTML);
let dayNumber = Number(day.innerHTML);

let timeout = setInterval(countdown, 1000);

function countdown() {
  secondsCountDown();
  minutesCountDown();
  hoursCountDown();
  daysCountDown();
  //   console.log(secondsNumber);
}
console.log(secondsNumber);

function secondsCountDown() {
  if (secondsNumber > 0) {
    secondsNumber--;
    seconds.innerHTML = secondsNumber;
  } else {
    secondsNumber = 5;
    seconds.innerHTML = secondsNumber;
    return secondsNumber;
  }
}

function minutesCountDown() {
  if (secondsNumber === 0 && minutesNumber > 0) {
    minutesNumber--;
    minutes.innerHTML = minutesNumber;
  }
}
function hoursCountDown() {
  if (minutesNumber === 0 && hoursNumber > 0) {
    hoursNumber--;
    minutesNumber = 5;
    minutes.innerHTML = minutesNumber;
    hour.innerHTML = hoursNumber;
  }
}

function daysCountDown() {
  if (hoursNumber === 0 && dayNumber > 0) {
    dayNumber--;
    hoursNumber = 5;
    hour.innerHTML = hoursNumber;
    day.innerHTML = dayNumber;
  } else if (
    dayNumber === 0 &&
    hoursNumber === 0 &&
    minutesNumber === 0 &&
    secondsNumber === 0
  ) {
    clearInterval(timeout);
  }
}
