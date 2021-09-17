const daysBox = document.getElementById("days-box");
const hoursBox = document.getElementById("hours-box");
const minutesBox = document.getElementById("minutes-box");
const secondsBox = document.getElementById("seconds-box");
const second = 1000; // 1 second = 1000 milliseconds
const minute = 60 * second; 
const hour = 60 * minute;
const day = 24 * hour;

function getLastDayTime(year) {
  const lastDayOfYear = new Date(year, 11, 31, 23,59, 59, 999);
  return lastDayOfYear.getTime();
}

const formatTime = time => time < 10 ? `0${time}` : time;

function countdown() {
  let currentYear = new Date().getFullYear();
  const todayDate = new Date();
  const todayTime = todayDate.getTime();
  let endTime = getLastDayTime(currentYear);
  let remainingTime = endTime - todayTime;
  if (endTime < todayDate) {
    currentYear += 1;
    endTime = getLastDayTime(currentYear);
    remainingTime = endTime - todayTime;
  } 
  const daysLeft = Math.floor(remainingTime / day);
  const hoursLeft = Math.floor((remainingTime % day) / hour);
  const minutesLeft = Math.floor((remainingTime % hour) / minute);
  const secondsLeft = Math.floor((remainingTime % minute) / second);
  daysBox.textContent = daysLeft;
  hoursBox.textContent = formatTime(hoursLeft);
  minutesBox.textContent = formatTime(minutesLeft);
  secondsBox.textContent = formatTime(secondsLeft);
}


let i = setInterval(countdown, second);

countdown();