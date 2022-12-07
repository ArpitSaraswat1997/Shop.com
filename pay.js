var userdata = JSON.parse(localStorage.getItem("userdata"));
displayinfo();
document.querySelector("#paybtn").addEventListener("click", goPay);
function displayinfo() {
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
  document.querySelector(".custdetail").append(custdiv);
}
function goPay() {
  var cardcat = document.getElementById("cardtype").value;
  var cardName = document.getElementById("cardname").value;
  var cardno = document.getElementById("cardno").value;
  var cvv = document.getElementById("cvv").value;
  var month = document.getElementById("selcmon").value;
  var year = document.getElementById("selcyear").value;
  var pin = document.getElementById("pin").value;
  if (
    cardName == "" ||
    cardno == "" ||
    cvv == "" ||
    cardcat == "" ||
    month == "" ||
    year == "" ||
    pin == ""
  ) {
    alert("Enter All Details");
  } else {
    var pop = prompt("Enter OTP ", "1234");
    if (pop == 1234) {
      alert("Payement Sucessfull");
      localStorage.removeItem("cart");
      localStorage.removeItem("finalval");
    } else {
      alert("Enter Valid OTP");
    }
  }
}
console.log("done");
