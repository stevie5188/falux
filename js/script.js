"use strict";
function imageSize(windowHeight) {
    if (windowHeight >= 1080) {
        document.querySelector('body').style.backgroundImage = 'url("../media/FaluxWEB4k.jpg")';
        console.log('4k');
    }   else {
        document.querySelector('body').style.backgroundImage = 'url("../media/FaluxWEB1080.jpg")';
        console.log('1080');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let windowHeight = parseInt(window.innerHeight);
    imageSize(windowHeight);
});