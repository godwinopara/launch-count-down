setInterval(displayCountDownTime, 1000);

const day = document.querySelector(".days p");
const hour = document.querySelector(".hours p");
const minutes = document.querySelector(".minutes p");
const seconds = document.querySelector(".seconds p");

let dueTime = "dec 27 2021 00:00:00";

const getCountDownDueDay = () => {
  const dueDay = new Date(launchTime).getTime();
};

const getDayRemaining = () => {
  const launchDay = new Date(dueTime).getTime();
  const now = new Date().getTime();

  const diff = launchDay - now;

  return diff;
  seconds.innerHTML = secTime;
};

const setTime = () => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const days = hour * 24;

  return { sec, min, hour, days };
};

const remainingDayToCountDown = ({ days, hour, min, sec }) => {
  const timeDifference = getDayRemaining();

  const daysRemaining = Math.floor(timeDifference / days);
  const hoursRemaining = Math.floor((timeDifference % days) / hour);
  const minutesRemaining = Math.floor((timeDifference % hour) / min);
  const secondsRemaining = Math.floor((timeDifference % min) / sec);

  return { daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining };
};

function displayCountDownTime() {
  const { daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining } =
    remainingDayToCountDown(setTime());

  day.innerHTML = daysRemaining < 10 ? "0" + daysRemaining : daysRemaining;
  hour.innerHTML = hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining;
  minutes.innerHTML =
    minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining;
  seconds.innerHTML =
    secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining;
}
