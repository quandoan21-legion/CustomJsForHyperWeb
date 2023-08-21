const newButton = document.createElement('button');

const videoTagElement = document.getElementsByName('video')[0];
const queryVideoTag = document.querySelector('video');

const getFullScreenButton =  document.getElementsByClassName('icon-button fullscreen-icon');

document.getElementsByClassName('icon-button fullscreen-icon').addEventListener('click', myFunction);

function myFunction(){
        console.log(123, getFullScreenButton);
    }
