// About Me animation
var i = 0;
var speed = 50;
const text = 'About Me'

function animation() {
    const element = document.getElementById('aboutme')
    if (i < text.length) {
        const ct = element.innerText
        const nt = ct + text.charAt(i)
        element.innerText = nt
        i++;
        setTimeout(animation, speed);
    }
}