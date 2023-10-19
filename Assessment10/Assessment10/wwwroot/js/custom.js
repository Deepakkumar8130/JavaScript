

var itemList = document.getElementById("itemsList");
var quantityInput = document.getElementById("quantityInput");
const tableBody = document.getElementById("tbl_body");
const tableTotal = document.getElementById("tableTotal");
let rowNumber = 1;
let total = 0;
getItems();
isEmpty();
const add = document.getElementById("btnAdd");

add.addEventListener("click", addItem);

tableBody.addEventListener("input", function (e) {
    if (e.target.classList.contains("quantity-input")) {
        updateQuantity(e.target);
    }
})
document.getElementById("btnDetail").addEventListener("click",fillDetail)

