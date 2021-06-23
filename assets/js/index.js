const medias = {audio : false, video : true};
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
}

function errorCallback(err) {
  console.log(err);
  alert(err);
}

function draw() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(video, 0, 0);

  requestAnimationFrame(draw);
}

let qrcode;

async function scanQR(){
    alert("scanned");
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    qrcode = jsQR(imageData.data, canvas.width, canvas.height);
    alert(qrcode.data);
}
