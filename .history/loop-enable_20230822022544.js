const buttonElement = document.getElementsByClassName("fullscreen-icon")[0];
const videoElement = document.getElementsByTagName("video")[0];
var loopButton = document.createElement("button");
var text = document.createTextNode("loop");
loopButton.appendChild(text);
loopButton.setAttribute("loop", "");
loopButton.setAttribute("id", "loop-button");
loopButton.setAttribute("aria-label", "loop");
loopButton.setAttribute("class", "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading ");

var element = document.getElementsByTagName("ytm-slim-video-action-bar-renderer")[0];
element.appendChild(loopButton);

loopButton.onclick = function () {
//     if (videoElement.hasAttribute('loop')) {
//         videoElement.removeAttribute('loop');
//     }
//     else {
        
//     }

videoElement.setAttribute("loop", "");
  console.log(videoElement.hasAttribute('loop'));
  
};