const newButton = document.createElement('button');

const videoTagElement = document.getElementsByName('video')[0];
const queryVideoTag = document.querySelector('video');

const getFullScreenButton =  document.getElementsByName('icon-button fullscreen-icon')[0];

if (queryVideoTag.hasAttribute('loop')) {
newButton.textContent = 'Un-Loop Video!';
document.body.appendChild(videoTagElement);
}
else {
newButton.textContent = 'Loop Video!';
document.body.appendChild(videoTagElement);
}


getFullScreenButton.addEventListener('click', () => {
    console.log(1231)
    if (queryVideoTag.hasAttribute('loop')) {
        queryVideoTag.removeAttribute('loop');
        newButton.innerHTML = 'Loop Video!';
    }
    else {
        var videoTagElement = document.getElementsByTagName('video')[0];
        videoTagElement.setAttribute("loop", "");
        newButton.innerHTML = 'Un-Loop Video!';
    }
});