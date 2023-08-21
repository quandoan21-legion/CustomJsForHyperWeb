const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);


newButton.addEventListener('click', () => {
    var getTag = document.querySelector('video')
    if (document.querySelector('video').hasAttribute('loop')) {
        document.querySelector('video').removeAttribute('loop')
    }
    else {
        var body = document.getElementsByTagName('video')[0];
        body.setAttribute("loop", "");
    }
});