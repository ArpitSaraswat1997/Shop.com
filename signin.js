////   document.querySelector("form").addEventListener("submit",myfun,mytodo);

//document.querySelector("form").addEventListener("submit", signin);

var userData = JSON.parse(localStorage.getItem("userData")) || [];

function signin() {
  event.preventDefault();
  var email = document.getElementById("sign-emai").value;
  var password = document.getElementById("sign-pass").value;

  var email2 = userData.filter(function (elem) {
    return email == elem.Email && password == elem.password;
  });

  if (email2.length == 0) {
    alert("Username / Password is incorrect");
    localStorage.setItem("signing", "0");
  } else {
    alert("Login Sucessfully");
    localStorage.setItem("signing", "1");
    window.location.href = "homepage2.html";
  }
}
