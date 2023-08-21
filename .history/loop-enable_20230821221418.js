const newButton = document.createElement('button');
newButton.textContent = 'Loop Video!';
document.videoTagElement.appendChild(newButton);

var videoTagElement = document.getElementsByTagName('video')[0];
var queryVideoTag = document.querySelector('video');

if (queryVideoTag.hasAttribute('loop')) {
    queryVideoTag.removeAttribute('loop');
    newButton.innerHTML = 'Loop Video!';
}
else {
    videoTagElement.setAttribute("loop", "");
    newButton.innerHTML = 'Un-Loop Video!';x
}




newButton.addEventListener('click', () => {
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