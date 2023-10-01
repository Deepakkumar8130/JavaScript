// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var list = [{"id" :1,"title": "Java", "price": 100, "author": "Mr.Java" }];
console.log(list)

function getBooks() {
    $("#tbl_book").DataTable().destroy();
    $("#tbl_book").DataTable({
        data: list,
        columns: [
            { "data": "title" },
            { "data": "price" },
            { "data": "author" },
            {
                "data": "id", class: "text-center", render: function (id) {
                    var link = "<a class='action-button' onclick='deleteBook(" + id + ")'><i class='fa fa-trash'></i></a>"
                    link += "<a onclick='editBook(" + id + ")'><i class='fa fa-edit'></i></a>"
                    return link
                }
            }
        ]
    })
}

function modalClear() {
    document.getElementById("exampleModalLabel").innerText = "Add new Book";
    document.getElementById("txtId").value = "";
    document.getElementById("txtTitle").value = "";
    document.getElementById("txtPrice").value = "";
    document.getElementById("txtAuthor").value = "";
}

function addBook() {
    var id = document.getElementById("txtId").value
    var title = document.getElementById("txtTitle").value
    var price = document.getElementById("txtPrice").value
    var author = document.getElementById("txtAuthor").value

    if (!title || !price || !author) {
        alert("Please fill in all fields.");
        return;
    }

    console.log(document.getElementById("txtId").value)

    if (!id) {

        if (list.length === 0) {
            id = 1;
        } else {
            id = list[list.length - 1].id + 1; 
        }
        var newBook = { "id": id, "title": title, "price": price, "author": author }
        list.push(newBook);
        document.getElementById("tbl_book").innerHTML = ""
    }
    else {
        var id = parseInt(id);
        var book = list.find(function (item) {
            return item.id === id;
        });

        if (book) {
            book.title = title;
            book.price = price;
            book.author = author;
        } else {
            alert("Book not found.");
            return;
        }
    }
    getBooks();

    $("#exampleModal").modal("hide");
}

function deleteBook(id) {
    list.splice(id-1, 1);
    getBooks();
}

function editBook(id) {

    var book = list[id-1];
    console.log(book)
    $("#exampleModal").modal('show');

    document.getElementById("exampleModalLabel").innerText = "Edit Book";
    document.getElementById("txtId").value = book.id;
    document.getElementById("txtTitle").value = book.title;
    document.getElementById("txtPrice").value = book.price;
    document.getElementById("txtAuthor").value = book.author;

    
}
