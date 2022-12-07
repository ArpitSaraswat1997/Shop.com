document.querySelector("form").addEventListener("submit", signup);

var userData=JSON.parse(localStorage.getItem("userData")) ||[]

 function signup(){
 event.preventDefault();
  var email=document.getElementById("login-em").value;
  var password=document.getElementById("login-p").value;
  var firstname=document.getElementById("login-pad").value;
  var lastName=document.getElementById("login-ad").value;
  var password2=document.getElementById("login-p2").value;
  var userdata={
    Email:email,
    password:password,
    firstname:firstname,
    lastName:lastName,
    password2:password2
   }
   userData.push(userdata)
 localStorage.setItem("userData",JSON.stringify(userData))


 if(password!=password2){
  alert("password not matched")
 }
 else{
  alert("signup-scucessfully")
  window.location.href="signin.html"
 }
  


  }

   
 