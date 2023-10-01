// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var books = ["Java", "Python"];
showBooks(books);
document.getElementById("btnAdd").addEventListener("click", AddBook);


function AddBook() {
    var book = document.getElementById("txtbook").value;
    if (book == "") {
        alert("please enter a book");
    }
    else if (books.indexOf(book) >= 0) {
        alert("Book already exist");
        document.getElementById("txtbook").value = "";
    }
    else {
        books.push(book);
        document.getElementById("txtbook").value = "";
        showBooks(books);
    }
}


function DeleteBook(i) {
    books.splice(i, 1);
    showBooks(books);
}



function showBooks(books) {
    var list = document.getElementById("list");
    var newlist = "";
    books.forEach(function (book, ind) {
        newlist += "<li>" + book +"<a class='close' onclick='DeleteBook("+ind+")'>&times</a></li>";
    });
    list.innerHTML = newlist;
}