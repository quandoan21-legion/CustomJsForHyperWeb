const newButton = document.createElement('button');

var queryVideoTag = document.querySelector('video');
if (document.querySelector('video').hasAttribute('loop')) {
    newButton.textContent = 'Loop Video!';
    document.body.appendChild(queryVideoTag);
}
else {
    var body = document.getElementsByTagName('video')[0];
    newButton.textContent = 'Un-Loop Video!';
    document.body.appendChild(queryVideoTag);
}



newButton.addEventListener('click', () => {
    if (document.querySelector('video').hasAttribute('loop')) {
        document.querySelector('video').removeAttribute('loop');
        newButton.textContent = 'Loop Video!';
    }
    else {
        var body = document.getElementsByTagName('video')[0];
        body.setAttribute("loop", "");
        newButton.textContent = 'Un-Loop Video!';
    }
});