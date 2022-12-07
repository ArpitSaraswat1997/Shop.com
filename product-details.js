var product = JSON.parse(localStorage.getItem("product")) || {};
display();
function display() {
  // content
  var p = document.createElement("p");
  p.innerText = product.type;
  var h3 = document.createElement("h3");
  h3.innerText = product.name;
  var p1 = document.createElement("p");
  p1.innerText = "Sold by XYZ";
  var review = document.createElement("p");
  review.innerText = "Write a Review";
  if (typeof product.price == "string") l = convert(product.price);
  else l = product.price;
  var h2 = document.createElement("h2");
  h2.innerText = "$" + l;
  var emi = document.createElement("p");
  emi.innerHTML =
    `or 4 interest-free payments of <span>$` +
    l / 4 +
    `</span> with <img src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg"> <hr> <b>Free Standard Shipping on $50.00 and up.<hr>`;
  var div2 = document.createElement("div");
  div2.innerHTML =
    '<p style="font-size: 18px;background: #f0f1f7;padding: 5px;display: flex;align-items: center;max-width: 450px;"><img src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg" alt=" BitPay Supported Currencies " width="150px" style=" vertical-align: middle; padding-right: 5px;">Now accepting Crypto at Checkout! </p> <hr>';
  var div3 = document.createElement("div");
  div3.innerHTML = `<p>Size:</p>`;
  var select = document.createElement("select");
  var op1 = document.createElement("option");
  op1.innerHTML = "Please Select";
  select.append(op1);
  var op1 = document.createElement("option");
  op1.innerText = "3X Large - " + product.price;
  select.append(op1);
  var op1 = document.createElement("option");
  op1.innerText = "L - " + product.price;
  select.append(op1);
  var op1 = document.createElement("option");
  op1.innerText = "M - " + product.price;
  select.append(op1);
  var op1 = document.createElement("option");
  op1.innerText = "S - " + product.price;
  select.append(op1);
  var op1 = document.createElement("option");
  op1.innerText = "XL " + product.price;
  select.append(op1);
  var op1 = document.createElement("option");
  op1.innerText = "XS - " + product.price;
  select.append(op1);
  var op1 = document.createElement("option");
  op1.innerText = "XXL - " + product.price;
  select.append(op1);
  div3.append(select);

  var div4 = document.createElement("div");
  var p3 = document.createElement("p");
  p3.innerText = "Qty:";
  var input = document.createElement("input");
  input.value = 1;
  input.setAttribute("type", "number");
  input.setAttribute("min", "1");
  input.setAttribute("max", "10");
  var btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.addEventListener("click", function () {
    addCart(product.id, +input.value);
  });

  div4.append(p3, input, btn);

  document
    .querySelector("#content")
    .append(p, h3, p1, review, h2, emi, div2, div3, div4);

  // img
  var img_div = document.querySelector("#img");
  var img = document.createElement("img");
  img.setAttribute("src", product.image[0]);
  img_div.append(img);

  //thumbnail
  var thumbnail = document.querySelector("#thumbnails");
  product.image.map(function (e, i) {
    if (i > 2) return;
    var img1 = document.createElement("img");
    img1.setAttribute("src", e);
    img1.addEventListener("click", function () {
      img.setAttribute("src", e);
    });
    thumbnail.append(img1);
  });
}

function convert(x) {
  var pattern = /[0-9]/g;
  var r = x.match(pattern).map(Number);
  return r.join("") / 100;
}

function addCart(id, qty) {
  var cart = JSON.parse(localStorage.getItem("cartitems")) || [];

  var arr = cart.filter(function (e) {
    return e.id == id;
  });
  if (arr.length == 0) {
    alert("Product added successfully");
    product.price = convert(product.price);
    product.qty = qty;
    cart.push(product);
  } else {
    alert("Quantity updated successfully");
    arr[0].qty += qty;
    if (arr[0].qty > 10) arr[0].qty -= 10;
  }
  localStorage.setItem("cartitems", JSON.stringify(cart));
  window.location.href = "product-details.html";
}
