

function addProduct() {
  var table = document.getElementById("product");
  var row = table.insertRow(0);
  var del = row.insertCell(0);
  var pName = row.insertCell(1);
  var quantity = row.insertCell(2);
  var price = row.insertCell(3);
  var vat = row.insertCell(4);
  var total = row.insertCell(5);

  del.innerHTML = `<button class=" btn btn-sm btn-danger" onclick="deleteRow(this)" style="width: 50px">X</button>`;
  pName.innerHTML = `<input id="productName"  class="form-control" name="pName"  type="text"  placeholder="Ürün Adı"/>`;
  quantity.innerHTML = ` <input  oninput="calc()" name="quantity"  class="form-control quantity"  type="number"  placeholder="Adet"/>`;
  price.innerHTML = `<input oninput="calc()" step="0.01" name="price" class="form-control price"  type="number"  placeholder="Fiyat"/>`;
  vat.innerHTML = `<input  oninput="calc()" name="vat" class="form-control vat"  type="number"  placeholder="KDV"/>`;
  total.innerHTML = ` <input class="form-control total" name="total"  type="number"  placeholder="Toplam Fiyat"/>`;
}

function deleteRow(btn) {
  var rowCount = $("#product tr").length;
  if (rowCount > 1) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  } else {
    alert("Son satır silinemez");
  }
}

function calc() {
  const table = document.getElementById("product");
  table.addEventListener("input", ({ target }) => {
    const tr = target.closest("tr");
    const [pName, quantity, price, vat, total] = tr.querySelectorAll("input");
    total.value =
      quantity.value * price.value + (price.value / 100) * vat.value;
  });
  var sumQuantity = 0.0;
  $(".quantity").each(function () {
    sumQuantity += parseFloat(this.value);
  });
  var sumPrice = 0.0;
  $(".price").each(function () {
    sumPrice += parseFloat(this.value);
  });
  var sumVat = 0.0;
  $(".vat").each(function () {
    sumVat += parseFloat(this.value);
  });
  document.getElementById("productSum").value = sumQuantity * sumPrice;
  document.getElementById("productVat").value =
    sumQuantity * sumPrice + ((sumQuantity * sumPrice) / 100) * sumVat;
  document.getElementById("totalPrice").value =
    sumQuantity * sumPrice +
    sumQuantity * sumPrice +
    ((sumQuantity * sumPrice) / 100) * sumVat;
}
