let [seconds, minutes, hours] = [0, 0, 0];

let display = document.getElementById("display");

let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}: ${m}:${s}`; //mutiple data fetch
}

function startTimer() {
  if (timer !== null) return; //fast run nhos vner

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);  //1 sec = 1000ms
}

function stopTimer() {
  clearInterval(timer);
  timer = null; 
} //start gresi r feri end gresi start hos 

function resetTimer() {
  stopTimer(); 
  [seconds, minutes, hours] = [0, 0, 0]; //reset hunn 
  updateDisplay(); //call
}

document.getElementById("start").addEventListener("click", startTimer); //function chalaune kaam add listner
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);