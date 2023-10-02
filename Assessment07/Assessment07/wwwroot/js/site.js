// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let intervalId;

function startEffect() {
    intervalId = setInterval(function () {
        var color = getRandomColor();
        document.body.style.backgroundColor = color;
        document.getElementById("start").blur();
    }, 100);
}

function stopEffect() {
    clearInterval(intervalId);
    document.getElementById("stop").blur();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

   return color;
}
