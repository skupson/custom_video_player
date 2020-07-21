const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const timestamp = document.getElementById("timestamp");
const progress = document.getElementById("progress");

// Play and pause
function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

// Update play/pause icon
function updatePlayIcon() {
  video.paused
    ? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (parseInt(progress.value) * video.duration) / 100;
}

//
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function toggleAudio() {
  if (video.muted) {
    video.muted = false;
    mute.innerHTML = '<i class="fa fa-volume-up fa-2x"></i>';
  } else {
    video.muted = true;
    mute.innerHTML = '<i class="fas fa-volume-mute fa-2x"></i>';
  }
}

//* Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);

mute.addEventListener("click", toggleAudio);
