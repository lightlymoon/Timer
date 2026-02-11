let interval = null;
let duration = 0;
let isRunning = false;

const timeDisplay = document.getElementById("time-remaining");
const waitList = document.getElementById("wait-times");

function updateDisplay() {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  timeDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  interval = setInterval(() => {
    duration++;
    updateDisplay();
  }, 1000);
}

function waitTimer() {
  if (!isRunning) return;

  clearInterval(interval);
  isRunning = false;

  const li = document.createElement("li");
  li.textContent = timeDisplay.textContent;
  waitList.appendChild(li);
}

function resetTimer() {
  clearInterval(interval);
  duration = 0;
  isRunning = false;
  updateDisplay();
  waitList.innerHTML = "";
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("wait").addEventListener("click", waitTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
