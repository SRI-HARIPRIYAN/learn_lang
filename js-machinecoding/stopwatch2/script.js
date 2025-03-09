const timerDiv = document.getElementById("timer");
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
function startTimer() {
	timer = setInterval(() => {
		seconds++;
		updateTime();
	}, 1000);
}

function updateTime() {
	if (seconds >= 60) {
		minutes++;
		seconds = 0;
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}
	timerDiv.innerText = `${hours.toString().padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function stopTimer() {
	if (timer) clearInterval(timer);
	timer = null;
}

function resetTimer() {
	if (timer) {
		clearInterval(timer);
	}
	timer = null;
	seconds = 0;
	minutes = 0;
	hours = 0;
	timerDiv.innerText = "00:00:00";
}
