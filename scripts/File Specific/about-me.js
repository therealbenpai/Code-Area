// About Me animation
var i = 0;
var speed = 50;
const text = 'About Me'

function animation() {
    const element = document.getElementById('aboutme')
    if (i < text.length) {
        element.innerText += text.charAt(i)
        i++;
        setTimeout(animation, speed);
    }
}