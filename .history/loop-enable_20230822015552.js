const buttonElement = document.getElementsByClassName("fullscreen-icon")[0];

var loopButton = document.createElement("button");
var text = document.createTextNode("loop");
loopButton.appendChild(text);
loopButton.setAttribute("loop", "");
loopButton.setAttribute("id", "loop-button");
var element = document.getElementsByTagName("ytm-slim-video-action-bar-renderer")[0];
element.appendChild(loopButton);

buttonElement.onclick = function () {
    const videoElement = document.getElementID("loop-button");
    if (videoElement.hasAttribute('loop')) {
        videoElement.removeAttribute('loop');
        buttonElement.innerHTML = 'Loop Video!';
    }
    else {
        videoElement.setAttribute("loop", "");
        buttonElement.innerHTML = 'Un-Loop Video!';
    }

};

// const videoElement = document.getElementsByTagName("video")[0];
// videoElement.setAttribute("loop", "");