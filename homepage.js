function openPage() {
  var x = document.getElementById("search").value;
  x = x.toLowerCase();
  if (x === "shoes" || x === "shoe" || x === "SHOES" || x === "Shoes") {
    window.open("shoes.html");
  } else if (
    x === "clothes" ||
    x === "cloth" ||
    x === "CLOTHES" ||
    x === "Clothes"
  ) {
    window.open("clothes.html");
  } else {
    alert("No result found.");
  }
}
console.log("hello Function");
signtrue();
function signtrue() {
  var getsign = localStorage.getItem("signing");
  var signout = document.createElement("a");
  if (getsign == 1) {
    signout.innerText = "Sign Out";
    signout.setAttribute("onclick", "getlogout()");
    signout.setAttribute("class", "signout");
    document.querySelector("#sign_logo").append(signout);
  } else {
    signout.innerText = "Sign In";
    signout.setAttribute("onclick", "getsignin()");
    signout.setAttribute("class", "signout");
    document.querySelector("#sign_logo").append(signout);
  }
}

function getlogout() {
  localStorage.setItem("signing", "0");
  window.location.href = "homepage2.html";
}
function getsignin() {
  window.location.href = "signin.html";
}
