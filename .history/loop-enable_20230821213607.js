const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);


newButton.addEventListener('click', () => {
    var getTag = document.querySelector('video')
  if(getTag.hasAttribute(loop)) {
    getTag.removeAttribute('loop')
  }
  else {
  var body = document.getElementsByTagName('video')[0];
body.setAttribute("loop","");}
});