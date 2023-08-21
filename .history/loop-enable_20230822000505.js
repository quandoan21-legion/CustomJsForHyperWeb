const newButton = document.createElement('button');

const videoTagElement = document.getElementsByName('video')[0];
const queryVideoTag = document.querySelector('video');

const getFullScreenButton =  document.getElementsByClassName('icon-button fullscreen-icon');

getFullScreenButton.addEventListener('click', myFunction);

function myFunction(){
    getFullScreenButton.innerHTML = "123"
    }
