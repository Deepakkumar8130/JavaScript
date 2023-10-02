// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var intervalId;
function startEffect() {

    intervalId = setInterval(randomPosition, 2000);

    document.getElementById("start").blur();
}

function stopEffect() {

    clearInterval(intervalId);

    document.getElementById("stop").blur();
}

function randomPosition() {
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach(function (bubble) {

        const maxX = window.innerWidth - bubble.clientWidth;
        const maxY = window.innerHeight - bubble.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        bubble.style.backgroundColor = getRandomColor();
        document.body.style.backgroundColor = getRandomColor();
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