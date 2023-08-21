const newButton = document.createElement('button');
newButton.textContent = 'Loop Video!';

var videoTagElement = document.getElementsByTagName('video')[0];
var queryVideoTag = document.querySelector('video');

if (queryVideoTag.hasAttribute('loop')) {
    queryVideoTag.removeAttribute('loop');
    newButton.textContent = 'Loop Video!';
}
else {
    videoTagElement.setAttribute("loop", "");
    newButton.textContent = 'Un-Loop Video!';x
}


document.videoTagElement.appendChild(newButton);

newButton.addEventListener('click', () => {
    if (queryVideoTag.hasAttribute('loop')) {
        queryVideoTag.removeAttribute('loop');
        newButton.textContent = 'Loop Video!';
    }
    else {
        var videoTagElement = document.getElementsByTagName('video')[0];
        videoTagElement.setAttribute("loop", "");
        newButton.textContent = 'Un-Loop Video!';
    }

    document.videoTagElement.appendChild(newButton);
});