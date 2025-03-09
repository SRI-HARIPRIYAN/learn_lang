let startTime,
	timeInterval,
	elapsedTime = 0;

function startTimer() {
	startTime = Date.now() - elapsedTime;
	timeInterval = setInterval(updateTime, 1000);
}

function resetTimer() {
	elapsedTime = 0;
	clearInterval(timeInterval);
	document.getElementById("time").innerText = "   ";
	timeInterval = null;
}

function updateTime() {
	elapsedTime = Date.now() - startTime;
	document.getElementById("time").innerText = elapsedTime;
	const seconds = Math.floor(elapsedTime / 1000);
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	document.getElementById("time").innerText = `${hours}:${minutes}:${remainingSeconds}`;
	console.log("ElapsedTime: " + elapsedTime);
	console.log("StartTime" + startTime);
}

function stopTimer() {
	clearInterval(timeInterval);
	timeInterval = null;
}
