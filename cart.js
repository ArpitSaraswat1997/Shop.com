//localStorage.setItem("cartitems", JSON.stringify(cartitems));
var cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];
var emi = 0;
displaycartsize();
console.log(cartitems.length);
if (cartitems.length == 0) {
  var emptydiv = document.createElement("div");
  emptydiv.setAttribute("class", "emptydiv");
  var p1 = document.createElement("h2");
  p1.innerHTML = "You do not have anything in you shopping cart.";
  p1.setAttribute("class", "empty");
  var p2 = document.createElement("p");
  p2.innerText = "You should continue shopping and add something to your cart!";
  var p3 = document.createElement("p");
  p3.innerText =
    "You can also Sign in / Create an account to earn up to 50% Cashback on eligible purchases.";
  var p4 = document.createElement("p");
  p4.innerText =
    "SHOP.COM makes online shopping easy by allowing shoppers to shop across million of products, hundreds of stores and thousands of name brands with the convenience of OneCart®, our universal shopping cart.";

  emptydiv.append(p1, p2, p3, p4);
  document.querySelector(".cartdiv").append(emptydiv);
  var checkdiv = document.querySelector(".checkoutdiv");
  checkdiv.setAttribute("id", "zerodiv");
} else {
  localStorage.setItem("cartvalue", JSON.stringify(cartitems));
  var divcart = document.createElement("div");
  divcart.setAttribute("class", "cartbox1");
  var checkout = document.createElement("div");
  checkout.setAttribute("class", "checkdiv");
  var h1 = document.createElement("h2");
  h1.setAttribute("class", "ch_header");
  h1.innerText = "Order Total";
  checkout.append(h1);
  /////////////////////////////////////////////////////////////////
  var total = document.createElement("div");
  total.setAttribute("class", "totalprice");
  var p1 = document.createElement("p");
  p1.innerText = "SubTotal:";
  var p2 = document.createElement("p");
  p2.innerText = "$" + totalval() + " /-";
  total.append(p1, p2);

  var p3 = document.createElement("p");
  p3.innerText =
    "or 4 interest-free payments of " + emival() + " with Rupay Card";

  var anch = document.createElement("a");
  anch.setAttribute("class", "atag");
  anch.setAttribute("href", "homepage2.html");
  anch.innerHTML = "< Continue Shopping";

  var shipdiv = document.createElement("div");
  shipdiv.setAttribute("class", "shipdiv");
  var pinbox = document.createElement("input");
  pinbox.setAttribute("class", "pinbox");
  pinbox.setAttribute("placeholder", "Zipcode");
  pinbox.setAttribute("type", "text");
  var estimatebtn = document.createElement("button");
  estimatebtn.setAttribute("class", "estbtn");
  estimatebtn.innerText = "Estimate Shipping";
  estimatebtn.setAttribute("onclick", "Free Shipping");
  shipdiv.append(pinbox, estimatebtn);

  var proccout = document.createElement("div");
  proccout.setAttribute("class", "proceedbtn");
  var prcbtn = document.createElement("button");
  prcbtn.innerText = "Proceed to Checkout";
  prcbtn.setAttribute("class", "prcbtn");
  prcbtn.setAttribute("onclick", "window.location.href='checkout.html'");
  proccout.append(prcbtn);

  var trdparty = document.createElement("div");
  trdparty.setAttribute("class", "thrpartydiv");
  var trdheader = document.createElement("div");
  trdheader.setAttribute("class", "trdheader");
  var trdp = document.createElement("p");
  trdp.innerText = "or checkout with:";
  trdheader.append(trdp);

  var cart_pay = document.createElement("div");
  cart_pay.setAttribute("class", "cart_pay");

  var img1_div = document.createElement("div");
  img1_div.setAttribute("class", "imgdiv");
  var img1 = document.createElement("img");
  img1.setAttribute(
    "src",
    "https://img.shop.com/Image/local/images/cc/paypal-logo.svg"
  );
  var site1 = document.createElement("button");
  site1.setAttribute("onclick", "location.href='http://www.paypal.com'");
  site1.setAttribute("type", "button");
  site1.setAttribute("class", "btn1");
  site1.append(img1);
  img1_div.append(site1); /////////////////

  var img2_div = document.createElement("div");
  img2_div.setAttribute("class", "imgdiv");
  var img2 = document.createElement("img");
  img2.setAttribute(
    "src",
    "https://img.shop.com/Image/local/images/cc/paypal-credit.svg"
  );
  var site2 = document.createElement("button");
  site2.setAttribute(
    "onclick",
    "location.href='https://www.paypal.com/checkoutnow?token=EC-0S065132BS122131G'"
  );
  site2.setAttribute("type", "button");
  site2.setAttribute("class", "btn1");
  site2.append(img2);
  img2_div.append(site2);

  var img3_div = document.createElement("div");
  img3_div.setAttribute("class", "imgdiv");
  var img3 = document.createElement("img");
  img3.setAttribute(
    "src",
    "https://src.mastercard.com/assets/img/btn/src_chk_btn_147x034px.svg?locale=en_us&paymentmethod=master,visa,discover,amex&checkoutid=a4a6w4v6h7cg0iaijxn0j1iaoelnus5936"
  );
  var site3 = document.createElement("button");
  site3.setAttribute(
    "onclick",
    "location.href='https://src.mastercard.com/access/welcome/enroll'"
  );
  site3.setAttribute("type", "button");
  site3.setAttribute("class", "btn1");
  site3.append(img3);
  img3_div.append(site3);
  cart_pay.append(img1_div, img2_div, img3_div);
  trdparty.append(trdheader, cart_pay);

  ////////////////////////////////////////////////////////////////
  cartitems.map(function (el, index) {
    var divcart2 = document.createElement("div");
    divcart2.setAttribute("class", "cartbox2");
    var cartimg = document.createElement("img");
    cartimg.setAttribute("src", el.image);
    cartimg.setAttribute("class", "cartimg");

    var prdetails = document.createElement("div");
    prdetails.setAttribute("class", "prdetails");

    var prdname = document.createElement("p");
    prdname.innerText = el.name;
    prdname.setAttribute("class", "prdtitle");

    var prdprice = document.createElement("p");
    prdprice.innerText = "Price: $" + el.price;
    prdname.setAttribute("class", "prdprice");

    var prdid = document.createElement("p");
    prdid.innerText = "Item#:" + el.id;
    prdname.setAttribute("class", "prdid");

    var prdqty = document.createElement("div");
    prdqty.setAttribute("class", "prdqty");

    var qtytag = document.createElement("p");
    qtytag.innerText = "Quantity: ";

    var qtyval = document.createElement("input");
    qtyval.setAttribute("class", "qtyval");
    qtyval.setAttribute("value", el.qty);

    var addbtn = document.createElement("button");
    addbtn.innerText = " + ";
    addbtn.setAttribute("class", "addbtn");
    addbtn.addEventListener("click", function () {
      addqty(index);
    });

    var subsbtn = document.createElement("button");
    subsbtn.innerText = " - ";
    subsbtn.setAttribute("class", "subsbtn");
    subsbtn.addEventListener("click", function () {
      subsqty(index);
    });

    prdqty.append(qtytag, qtyval, addbtn, subsbtn);

    prdetails.append(prdname, prdprice, prdid, prdqty);

    var prdbtn = document.createElement("div");
    prdbtn.setAttribute("class", "prdbtn");
    var savebtn = document.createElement("button");
    savebtn.setAttribute("class", "savebtn");
    savebtn.innerText = "Save Later";
    savebtn.addEventListener("click", function () {
      saveitem(index);
    });

    var removebtn = document.createElement("button");
    removebtn.innerText = "Remove";
    removebtn.setAttribute("class", "removebtn");
    removebtn.addEventListener("click", function () {
      delitem(index);
    });

    prdbtn.append(savebtn, removebtn);

    var blkdiv = document.createElement("div");
    blkdiv.setAttribute("class", "blkdiv");
    divcart2.append(cartimg, prdetails, prdbtn, blkdiv);
    divcart.append(divcart2);

    ///////////////////////////////////////////////////////////////////
  });

  var heading = document.getElementById("headerdiv");
  heading.style.setProperty("margin-bottom", "40px");

  var sellerdiv = document.createElement("div");
  sellerdiv.setAttribute("class", "sellerdiv");

  var h1 = document.createElement("h1");
  h1.innerText = "Items In Your Cart.";
  sellerdiv.append(h1);

  if (totalval() >= 100) {
    var frediv = document.createElement("div");
    frediv.setAttribute("class", "freediv");

    var car = document.createElement("img");
    car.setAttribute("src", "iconship.jpg");
    car.setAttribute("class", "shipicon");

    var shippara = document.createElement("p");
    shippara.innerText =
      "Congratulations, your order qualifies for Free Shipping.";
    frediv.append(car, shippara);
    document.querySelector(".cartdiv").append(sellerdiv, frediv, divcart);
    document
      .querySelector(".checkoutdiv")
      .append(checkout, total, p3, anch, shipdiv, proccout, trdparty);
  } else {
    document.querySelector(".cartdiv").append(sellerdiv, divcart);
    document
      .querySelector(".checkoutdiv")
      .append(checkout, total, p3, anch, shipdiv, proccout, trdparty);
  }
  //cartitems = JSON.parse(localStorage.getItem("cartitems"));
}

var cartvalue = totalval();
localStorage.setItem("cartvalue", JSON.stringify(cartvalue));
function totalval() {
  var val = cartitems.reduce(function (acc, el) {
    return acc + el.price * el.qty;
  }, 0);
  return val.toFixed(2);
}

function emival() {
  return totalval() / 4;
}
function addqty(index) {
  cartitems.map(function (el, i) {
    if (i == index) {
      return el.qty++;
    }
  });
  localStorage.setItem("cartitems", JSON.stringify(cartitems));
  window.location.href = "Cart.html";
}
function subsqty(index) {
  cartitems.map(function (el, i) {
    if (i == index) {
      return el.qty--;
    }
  });
  localStorage.setItem("cartitems", JSON.stringify(cartitems));
  window.location.href = "Cart.html";
}
function delitem(index) {
  cartitems.splice(index, 1);
  //displayitems(cartitems);
  localStorage.setItem("cartitems", JSON.stringify(cartitems));
  window.location.href = "Cart.html";
}
var saveitems = JSON.parse(localStorage.getItem("saveitems"));
function saveitem(index) {
  cartitems.splice(index, 1);
  //displayitems(cartitems);
  localStorage.setItem("saveitems", JSON.stringify(saveitems));
  localStorage.setItem("cartitems", JSON.stringify(cartitems));
  window.location.href = "Cart.html";
}
function displaycartsize() {
  var cartsize = cartitems.length;
  if (cartsize == 0) {
    var cartbox = document.createElement("p");
    cartbox.innerText = "Cart";
    document.querySelector("#cart_logo").append(cartbox);
  } else {
    var cartsize = cartitems.length;
    var cartbox = document.createElement("input");
    cartbox.setAttribute("type", "text");
    cartbox.setAttribute("id", "cartlogo");
    cartbox.setAttribute("value", cartsize);
    document.querySelector("#cart_logo").append(cartbox);
  }
}
console.log(cartitems.length);
