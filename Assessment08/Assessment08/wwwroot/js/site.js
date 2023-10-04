// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var intervalId1;
var intervalId2;
function startEffect() {

    intervalId1 = setInterval(randomPosition, 2000);
    intervalId2 = setInterval(backgroundChange, 100);

    document.getElementById("start").blur();
}

function stopEffect() {

    clearInterval(intervalId1);
    clearInterval(intervalId2);

    document.getElementById("stop").blur();
}

function backgroundChange() {

    document.body.style.backgroundColor = getRandomColor();
}
function randomPosition() {
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach(function (bubble) {

        const maxX = window.innerWidth - bubble.clientWidth;
        const maxY = window.innerHeight - bubble.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        bubble.style.backgroundColor = getRandomColor();
        bubble.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}