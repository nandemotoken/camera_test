const medias = {
  audio : false,
  video : true
};


window.onload = () => {
const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);
  
}