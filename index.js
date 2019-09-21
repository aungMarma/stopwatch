// With DOM

let duration = 0;
let start = false;
let intv = null;

// To show duration
const elem = document.getElementById('duration-text');

// Listener on start button
function onStart() {
	if (start) {
		elem.textContent = 'STOPWATCH has already started.';
	}
	// Clear exiting interval
	if (intv) {
		clearInterval(intv);
	}
	intv = setInterval(function() {
		elem.textContent = duration++ + ' seconds';
	}, 1000);
	start = true;
}

// Listener on stop button
function onStop() {
	if (!start) {
		elem.textContent = "STOPWATCH hasn't started yet.";
	}
	clearInterval(intv);
	duration = 0;
	start = false;
	elem.textContent = duration + ' seconds';
}

// Listener on reset button
function onReset() {
	if (start) {
		onStop();
	}
}
