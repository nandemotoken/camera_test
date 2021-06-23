const medias = {
  audio : false,
  video : true
};

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
const promise = navigator.mediaDevices.getUserMedia(medias);
promise.then(successCallback).then(errorCallback);
}

function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
};

function errorCallback(err) {
  console.log(err);
};

function draw() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(video, 0, 0);

  requestAnimationFrame(draw);
}