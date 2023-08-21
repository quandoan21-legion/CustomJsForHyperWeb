function createLoopButton (){
    const newButton = document.createElement('button');
newButton.textContent = 'Loop Video!';
document.body.appendChild(newButton);

if (document.querySelector('video').hasAttribute('loop')) {
    document.querySelector('video').removeAttribute('loop');
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
    if (document.querySelector('video').hasAttribute('loop')) {
        document.querySelector('video').removeAttribute('loop');
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
}

insertAfter ( createLoopButton , document.querySelector('video'))