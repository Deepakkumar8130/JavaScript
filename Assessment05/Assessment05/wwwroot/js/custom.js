$(document).ready(function () {
    getBooks();
    document.getElementById("addbtn").addEventListener("click", modalClear);
    document.getElementById("btnSubmit").addEventListener("click", addBook);
})