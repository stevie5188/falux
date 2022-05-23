"use strict";
function imageSize(windowHeight) {
    if (windowHeight >= 1080) {
        document.querySelector('body').style.backgroundImage = 'url("../media/FaluxWEB4k.jpg")';
    }   else {
        document.querySelector('body').style.backgroundImage = 'url("../media/FaluxWEB1080.jpg")';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let windowHeight = parseInt(window.innerHeight);
    imageSize(windowHeight);
});
