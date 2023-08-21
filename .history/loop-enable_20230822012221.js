const buttonElement = document.getElementsByClassName("fullscreen-icon")[0];
buttonElement.onclick = function() {
   const videoElement = document.getElementsByTagName("video")[0];
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