const userdata = JSON.parse(localStorage.getItem("userdata"));
var cartvalue = JSON.parse(localStorage.getItem("cartvalue"));
var couponcode = "MASAI30";
var finval = cartvalue;
console.log(userdata);
displaycustdata();
function displaycustdata() {
  var head = document.createElement("p");
  head.innerText = "Shipping Address :";
  var custdiv = document.createElement("div");
  custdiv.setAttribute("class", "custdiv");
  var custname = document.createElement("p");
  custname.innerText = userdata["fname"] + " " + userdata["lname"];
  custname.setAttribute("class", "custname");
  var add1 = document.createElement("p");
  add1.innerText = userdata["add1"];
  var add2 = document.createElement("p");
  add2.innerText =
    userdata["add2"] +
    "," +
    userdata["state"] +
    ", " +
    "India" +
    ", " +
    userdata["zipcode"];
  var mob = document.createElement("p");
  mob.innerText = "Mobile No: " + userdata["mob1"];
  custdiv.append(custname, add1, add2, mob);
  document.querySelector(".custdetail").append(head, custdiv);
  document.querySelector(".totval").innerText = "$" + cartvalue + " /-";
  document.querySelector(".finval").innerText = "$" + finval + " /-";
  document.querySelector("#getmob").innerText = userdata["mob1"];
}

var disval = 0;
function applycode() {
  var getcode = document.getElementById("getcode").value;
  if (getcode != "MASAI30") {
    document.getElementById("couponmsg").innerText = "";
    document.getElementById("couponmsg").innerText = "Not Valid Coupon!!! ";
    document.getElementById("copontrue").innerText = "";
    document.getElementById("couponval").innerText = "";
    finval = cartvalue;
    document.querySelector(".finval").innerText = "$" + finval + " /-";
  } else if (getcode == "MASAI30") {
    document.getElementById("couponmsg").innerText = "Coupon has Applied!!! ";
    document.getElementById("copontrue").innerText = "Coupon Discount:";
    disval = (cartvalue * 30) / 100;
    disval = disval.toFixed(2);
    document.getElementById("couponval").innerText = "-" + " $" + disval + "/-";
    finval = cartvalue - disval;
    document.querySelector(".finval").innerText =
      "$" + finval.toFixed(2) + " /-";
  }
  console.log(cartvalue);
}
