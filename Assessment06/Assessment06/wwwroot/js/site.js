// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function suggestion() {
    var li = ""
    for (let i = 0; i < 3; i++) {
        li += "<li class='password-li'>" + passwordGenerator() + "</li>";
    }
    document.getElementById("txtPasswords").innerHTML = li;


    var liElements = document.querySelectorAll(".password-li");
    liElements.forEach(function (liElement) {
        liElement.addEventListener("click", fillPassword);
    });

}

function passwordGenerator() {
    var userName = document.getElementById("txtName").value
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numChars = "0123456789";
    var specialChars = "~`! @#$%^&*()_-+={[}]|\:;\"'<,>.?/";
    var passwordLen = 16;
    var password = "";
    password += userName.substring(0, 3);
    password += getRandomCharacter(upperCase);
    password += getRandomCharacter(lowerCase);
    password += getRandomCharacter(numChars);
    password += getRandomCharacter(specialChars);

    const remaining = passwordLen - password.length;

    for (let i = 0; i < remaining; i++) {
        const charSet = upperCase + lowerCase + numChars + specialChars;
        password += getRandomCharacter(charSet);
    }

    password = shuffleString(password);
    
    console.log(password)
    console.log(password.length)
    return password.toString();
}


function getRandomCharacter(str) {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str.charAt(randomIndex);
}

function shuffleString(str) {
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    //console.log(arr.join(""))
    //console.log(arr.join("").length)
    return arr.join("");
}

function fillPassword(e) {
    
        var selectPassword = e.target.textContent;
        document.getElementById("txtPassword").value = selectPassword;
    
}

function togglePassword() {
    var passwordInput = document.getElementById("txtPassword");
    var passwordInputIcon = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordInputIcon.classList.remove("fa-eye");
        passwordInputIcon.classList.add("fa-eye-slash");
    }
    else {
        passwordInput.type = "password";

        passwordInputIcon.classList.remove("fa-eye-slash");
        passwordInputIcon.classList.add("fa-eye");
    }
}