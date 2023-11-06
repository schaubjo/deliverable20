// window.addEventListener("load", function () {
// 	console.log("Good job opening the window")
// });


function load() {
	const video = document.getElementById('player1');
	video.preload = true;
	video.autoplay = false;
	video.loop = false;
}

document.addEventListener("DOMContentLoaded", function () {

	const video = document.getElementById('player1');

	document.querySelector("#play").addEventListener('click', function () {
		video.play();
		video.volume = parseFloat(volumeSlider.value) / 100;

		volumeInfo.textContent = `${volumeSlider.value}%`;
	})
	document.querySelector("#pause").addEventListener('click', function () {
		video.pause();
	})

	video.currentPlaybackRate = 1.0;

	const slowButton = document.getElementById("slower");


	slowButton.addEventListener('click', function () {

		video.playbackRate -= 0.1;

		console.log(`New speed: ${video.playbackRate}`)
	})

	const fastButton = document.getElementById("faster");

	fastButton.addEventListener('click', function () {

		video.playbackRate += 0.1;

		console.log(`New speed: ${video.playbackRate}`);
	})


	const skipButton = document.getElementById('skip')

	skipButton.addEventListener('click', function () {

		let newTime = video.currentTime + 10;

		if (newTime > video.duration) {
			newTime = 0;
		}

		video.currentTime = newTime;
		console.log(`Current video time: ${video.currentTime}`);
	});

	const muteButton = document.querySelector("#mute");

	muteButton.addEventListener('click', function () {
		if (video.muted) {
			video.muted = false;
			muteButton.textContent = 'Mute';
		} else {
			video.muted = true;
			muteButton.textContent = 'Unmute';
		}
	})

	const volumeSlider = document.getElementById("slider");
	const volumeInfo = document.getElementById("volume");

	volumeSlider.addEventListener('input', function () {
		video.volume = parseFloat(volumeSlider.value) / 100;
		volumeInfo.textContent = `${volumeSlider.value}%`;
	});

	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	})

	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	})
})
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });