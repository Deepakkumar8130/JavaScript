// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.








var interval = null;
var interval2 = null;
var total = 0;

function totalValue() {
    total = Number(hour.value) * 3600;
    total += Number(minute.value) * 60;
    total += Number(second.value);
}

function formatTime(value) {
    return value.toString().padStart(2, '0');
}


function Timer() {
    totalValue();
    total--;

    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var mt = Math.floor((total / 60) - (hr * 60));
        var sc = total - ((hr * 3600) + (mt * 60));

        digital.innerHTML = formatTime(hr) + ':' + formatTime(mt) + ':' + formatTime(sc);
        hour.value = hr;
        minute.value = mt;
        second.value = sc;
    }
    else {

        disp.innerText = "Time Over !!";
        reset();
    }
};

function start() {
    document.getElementById("start").innerHTML = "START";
    digital.style.color = 'red';
    clearInterval(interval)
    clearInterval(interval2)
    document.getElementById("timerForm").style.display = "none";
    interval = setInterval(Timer, 1000);

    disp.innerText = "Timer Started";
};

function stop() {
    disp.innerText = "Timer Stoped";
    document.getElementById("start").innerHTML = "RESUME";
    clearInterval(interval)
    clearInterval(interval2)
    interval2 = setInterval(function () {

        digital.style.color = (digital.style.color == 'red' ? 'antiquewhite' : 'red');
    }, 300);
}

function reset() {
    clearInterval(interval2);
    clearInterval(interval);
    digital.style.color = 'red'

    document.getElementById("start").innerHTML = "START";
    disp.innerText = "Timer";
    document.getElementById("timerForm").style.display = "block";
    hour.value = null;
    minute.value = null;
    second.value = null;
    digital.innerHTML = formatTime(0) + ':' + formatTime(0) + ':' + formatTime(0);
}