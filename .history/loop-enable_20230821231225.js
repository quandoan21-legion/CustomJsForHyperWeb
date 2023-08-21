const newButton = document.createElement('button');

var videoTagElement = document.getElementsByTagName('video')[0];
var queryVideoTag = document.querySelector('video');

if (queryVideoTag.hasAttribute('loop')) {
newButton.textContent = 'Un-Loop Video!';
document.body.appendChild(newButton);
}
else {
newButton.textContent = 'Loop Video!';
document.body.appendChild(newButton);
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