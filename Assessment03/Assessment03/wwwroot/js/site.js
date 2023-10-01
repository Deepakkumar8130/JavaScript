// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var cal = document.getElementById("btnSubmit");

cal.addEventListener("click", () => {
    var totalMarks = 500;
    var marksObtained = 0;
    var grade = "";

    var marks = document.querySelectorAll(".mark");
    marks.forEach((input) => {
        marksObtained += parseFloat(input.value);
    });
    var percentage = marksObtained / totalMarks * 100;
    if (percentage > 85) {
        grade = "A";
    }
    else if (percentage > 65) {
        grade = "B";
    }
    else if (percentage > 45) {
        grade = "C";
    }
    else if (percentage > 33) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }


    var info = document.getElementById("info");


    info.innerHTML = "<strong>Total Marks : </strong>" + totalMarks + "<br/>";
    info.innerHTML += "<strong>Marks Obtained : </strong>" + marksObtained + "<br/>";
    info.innerHTML += "<strong>Percentage : </strong>" + percentage+"%<br/>";
    info.innerHTML += "<strong>Grade : </strong>" + grade;

    var marks = document.querySelectorAll(".mark");
    marks.forEach((input) => {
        input.value = "";
    });

});
