const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  if(seconds === 0) secondHand.className = "hand-plain second-hand";
  else secondHand.className = "hand second-hand";
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  if(mins === 0) minsHand.className = "hand-plain minute-hand";
  else minsHand.className = "hand minute-hand";
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  if(hour === 0) hourHand.className = "hand-plain hour-hand";
  else hourHand.className = "hand hour-hand";
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();