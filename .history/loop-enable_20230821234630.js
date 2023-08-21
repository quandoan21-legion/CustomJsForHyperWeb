const newButton = document.createElement('button');

const videoTagElement = document.getElementsByName('video')[0];
const queryVideoTag = document.querySelector('video');

const getFullScreenButton =  document.getElementsByClassName('icon-button fullscreen-icon');

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