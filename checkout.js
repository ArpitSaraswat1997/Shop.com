var userdata = localStorage.getItem("getdataobj");
document.querySelector("#prcd").addEventListener("click", getdata);
function getdata() {
  var email = document.getElementById("email1").value;
  var refmail = document.getElementById("email2").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var adr1 = document.getElementById("add1").value;
  var adr2 = document.getElementById("add2").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zipcode = document.getElementById("zipcode").value;
  var mob1 = document.getElementById("mob").value;
  var mob2 = document.getElementById("mob2").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;

  var getdataobj = {
    mail: email,
    rmail: refmail,
    fname: fname,
    lname: lname,
    add1: adr1,
    add2: adr2,
    city: city,
    state: state,
    zipcode: zipcode,
    mob1: mob1,
    mob2: mob2,
    pass1: pass1,
    pass2: pass2,
  };
  localStorage.setItem("userdata", JSON.stringify(getdataobj));
  window.location.href = "checkout2.html";
}
