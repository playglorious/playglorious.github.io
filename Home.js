// JavaScript Document
var video  = document.getElementById("video");

function toggleControls() {
  if (video.hasAttribute("controls")) {
    video.removeAttribute("controls")
  } else {
    video.setAttribute("controls", "controls")
  }
}