const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

const countdownDate = new Date("July 15 , 2023").getTime();
const now = new Date().getTime();
const distance = countdownDate - now;
const days1 = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours1 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes1 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds1 = Math.floor((distance % (1000 * 60)) / 1000);
// console.log(countdownDate);



let secValue = seconds1,
  minValue = minutes1,
  hourValue = hours1,
  dayValue = days1;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s
