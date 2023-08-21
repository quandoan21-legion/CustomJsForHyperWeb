const newButton = document.createElement('button');

const videoTagElement = document.getElementsByTagName('video')[0];
const queryVideoTag = document.querySelector('video');

if (queryVideoTag.hasAttribute('style')) {
newButton.textContent = 'Un-Loop Video!';
document.body.appendChild(videoTagElement);
}
else {
newButton.textContent = 'Loop Video!';
document.body.appendChild(videoTagElement);
}


newButton.addEventListener('click', () => {
    if (queryVideoTag.hasAttribute('style')) {
        queryVideoTag.removeAttribute('style');
        newButton.innerHTML = 'Loop Video!';
    }
    else {
        var videoTagElement = document.getElementsByTagName('video')[0];
        videoTagElement.setAttribute("style", "background-color=red");
        newButton.innerHTML = 'Un-Loop Video!';
    }
});