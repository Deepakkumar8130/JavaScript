// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function isEmpty() {
    if (tableBody.rows.length == 0 && rowNumber == 1) {
        document.getElementById("footer").style.display = "none";
        document.getElementById("btnBill").style.display = "none";
        document.getElementById("Invoice").style.display = "none";
        document.getElementById("empty-cart-message").style.display = "block";
    }
    else {
        document.getElementById("footer").style.display = "contents";
        document.getElementById("btnBill").style.display = "block";
        document.getElementById("empty-cart-message").style.display = "none";
    }
}

function getItems() {
    const List = { "Pizza": 100, "Pepsi": 80, "Burger":60, "French Fries":70, "Chilli-Potato": 70};
    //const itemName = Object.keys(List);
    
    for (let item in List) {
        let option = document.createElement("option");
        option.text = item;
        option.value = `${List[item]}`;
        itemList.appendChild(option);
    }
    
}



function addItem() {
    const item = itemList.options[itemList.selectedIndex].text
    const itemPrice = itemList.options[itemList.selectedIndex].value

    const quantity = quantityInput.value

    // console.log(item)
    // console.log(itemPrice)
    // console.log(quantity)

    if (item && quantity) {

        const newRow = tableBody.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        cell1.innerHTML = rowNumber;
        cell2.innerHTML = item;
        cell3.innerHTML = itemPrice;

        const quantityInputCell = document.createElement("input");
        quantityInputCell.type = "number";
        quantityInputCell.className = "form-control border-0 quantity-input";
        quantityInputCell.value = quantity;
        cell4.appendChild(quantityInputCell);
        quantityInputCell.blur();

        cell5.innerHTML = (itemPrice * quantity).toFixed(2);

        const deleteCell = document.createElement("a");
        deleteCell.type = "button";
        deleteCell.innerHTML = "<i class='fa fa-trash'></i>";
        deleteCell.addEventListener("click", function () { deleteRow(newRow.rowIndex); });

        

        cell6.classList.add("text-center");
        cell6.appendChild(deleteCell);

        rowNumber++;
        total += itemPrice * quantity;
        isEmpty();
        itemList.selectedIndex = 0;
        quantityInput.value = "";

        

        
        tableTotal.innerHTML = total.toFixed(2);
    }
    else {
        alert("Please select an item and enter quantity.")
    }

}

function updateQuantity(element) {
    const row = element.parentElement.parentElement;

    const itemPrice = parseFloat(row.cells[2].textContent);
    const newQuantity = parseFloat(element.value);

    if (!isNaN(newQuantity) && newQuantity > 0) {
        const totalCell = row.cells[4];
        totalCell.textContent = (itemPrice * newQuantity).toFixed(2);
        updateTotal();
    }

}

function updateTotal() {
    let total = 0;
    const tableRows = tableBody.rows;

    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const totalCell = row.cells[4];
        total += parseFloat(totalCell.textContent);
    }
    tableTotal.innerHTML = total.toFixed(2);
}

function deleteRow(index) {
    tableBody.deleteRow(index - 1);
    rowNumber--;
    isEmpty();
    updateTotal();
}

function fillDetail() {

    document.getElementById("Invoice").style.display = "contents";
    const name = document.getElementById("txtName").value;
    const contact = document.getElementById("txtContact").value;
    $("#exampleModal").modal("hide");

    document.getElementById("custName").value = name;
    document.getElementById("custContact").value = contact;
    document.getElementById("custDate").value = new Date().toISOString().slice(0, 19).replace("T", " ");
    document.getElementById("custBillNo").value = Math.floor(Math.random() * 1000000);

    const sgst = total / 100 * 8;
    const cgst = total / 100 * 6;
    const totalPayAmount = total + sgst + cgst;
    document.getElementById("totalAmount").value = `₹${ total.toFixed(2)}`;
    document.getElementById("sgst").value = `₹${sgst.toFixed(2)}`;
    document.getElementById("custDate").value = new Date().toISOString().slice(0, 19).replace("T", " ");
    document.getElementById("cgst").value = `₹${cgst.toFixed(2)}`;
    document.getElementById("totalPayAmount").value = `₹${totalPayAmount.toFixed(2)}`;
}