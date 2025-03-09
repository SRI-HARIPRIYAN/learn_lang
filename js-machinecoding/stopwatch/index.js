let time;
let timeout;
function startTimer() {
	time = Date.now();
	timeout = setInterval(() => {
		updateTimer();
	}, 1000);
}

function updateTimer() {
	let currentTime = Math.floor(Date.now() - time);
	let totalSeconds = Math.floor(currentTime / 1000);
	let hours = Math.floor(totalSeconds / 3600);
	let minutes = Math.floor((totalSeconds % 3600) / 60);
	let remainingSeconds = Math.floor(totalSeconds % 60);
	console.log(totalSeconds);
	document.getElementById("time").innerText = `${hours}:${minutes}:${remainingSeconds}`;
}

function stopTimer() {
	clearInterval(timeout);
	document.getElementById("time").innerText = "0";
}
