function StopWatch() {
	let state = {
		duration: 0,
		start: false,
		interval: null
	};

	this.start = function() {
		if (state.start) {
			return 'StopWatch already started.';
		}
		state.start = true;
		// On every second, increment duration
		state.interval = setInterval(function() {
			state.duration++;
		}, 1000);
	};

	this.reset = function() {
		if (state.start) {
			this.stop();
		}
	};

	this.duration = function() {
		return state.duration;
	};

	this.stop = function() {
		if (!state.start) {
			return "StopWatch hasn't started.";
		}
		clearInterval(state.interval);
		state.interval = null;
		state.duration = 0;
		state.start = false;
	};
}
const sw = new StopWatch();
function start() {
	let elem = document.getElementById('duration-text');
	sw.start();
	setInterval(function() {
		elem.textContent = sw.duration() + ' sec';
	}, 1000);
}
