const newButton = document.createElement('button');

var videoTagElement = document.getElementsByTagName('video')[0];
var queryVideoTag = document.querySelector('video');

if (queryVideoTag.hasAttribute('style')) {
newButton.textContent = 'Un-Loop Video!';
document.body.appendChild(newButton);
}
else {
newButton.textContent = 'Loop Video!';
document.body.appendChild(newButton);
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