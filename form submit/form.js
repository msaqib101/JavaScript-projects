function login(){
   var email = document.getElementById("email").value
   var password = document.getElementById("password").value
  

   const email_db = "admin@gmail.com";
   const password_db ="abc!@#"

   const errors =[
    "Both feilds are requried",
    "wrong credentials",
    "You are successfully login"
   ]



   if (email=="" || password=="") {
    document.getElementById("error").style.display="block"
    document.getElementById("error").innerHTML= errors[0]
    
   }
   else if (email !=email_db || password!=password_db) {
    document.getElementById("error").style.display="block"
    document.getElementById("error").innerHTML= errors[1]
    
   }
   else{
   document.getElementById("success").style.display = "block"
   document.getElementById("error").style.display = "none"
   document.getElementById("success").innerHTML = errors[2]
   setTimeout(() => {
    
     location.href="dasbord.html"
    
   }, 2000);
  


   }
} 