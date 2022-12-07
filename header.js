// function openPage(){
//     let x= document.getElementById("search").value;
//     if(x === "shoes"){

//         window.open("index.html")
//        }
//        if(x==="Shoe"||x=="shoes"||x=="SHOES"||x=="shoe"||x=="shoes"){
//            window.open("index.html")
//        }
//        else{
//            alert("Sorry No product Found");
//        }

//   }

function displaycartsize() {
  var cartsize = cartitems.length;
  var cartbox = document.createElement("input");
  cartbox.setAttribute("type", "text");
  cartbox.setAttribute("id", "cartlogo");
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
    window.open("products.html");
  } else {
    alert("No result found.");
  }
}
