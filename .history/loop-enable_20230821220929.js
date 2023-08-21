const newButton = document.createElement('button');
newButton.textContent = 'Loop Video!';
document.body.appendChild(newButton);

var queryVideoTag = document.querySelector('video');

if (queryVideoTag.hasAttribute('loop')) {
    queryVideoTag.removeAttribute('loop');
    newButton.textContent = 'Loop Video!';
    document.body.appendChild(newButton);
}
else {
    var body = document.getElementsByTagName('video')[0];
    body.setAttribute("loop", "");
    newButton.textContent = 'Un-Loop Video!';
    document.body.appendChild(newButton);
}



newButton.addEventListener('click', () => {
    if (queryVideoTag.hasAttribute('loop')) {
        queryVideoTag.removeAttribute('loop');
        newButton.textContent = 'Loop Video!';
        document.body.appendChild(newButton);
    }
    else {
        var body = document.getElementsByTagName('video')[0];
        body.setAttribute("loop", "");
        newButton.textContent = 'Un-Loop Video!';
        document.body.appendChild(newButton);
    }
});