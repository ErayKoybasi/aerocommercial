let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("passwordPage")

eyeicon.addEventListener("click",function () { 
  if(password.type == "password"){
    password.type = "text"
    eyeicon.src = "./img/eye-open.png"
  }else{
    password.type = "password"
    eyeicon.src = "./img/eye-close.png"
  }
 })



 let eyeiconCanvas = document.getElementById("eyeiconCanvas")
 let passwordPageCanvas = document.getElementById("passwordPageCanvas")

 eyeiconCanvas.addEventListener("click",function () { 
  if(passwordPageCanvas.type == "password"){
    passwordPageCanvas.type = "text"
    eyeiconCanvas.src = "./img/eye-open.png"
  }else{
    passwordPageCanvas.type = "password"
    eyeiconCanvas.src = "./img/eye-close.png"
  }
  })


let passwordPageCanvasConfirm = document.getElementById("passwordPageCanvasConfirm")
let eyeiconCanvasConfirm = document.getElementById("eyeiconCanvasConfirm")

eyeiconCanvasConfirm.addEventListener("click",function () { 
  if(passwordPageCanvasConfirm.type == "password"){
    passwordPageCanvasConfirm.type = "text"
    eyeiconCanvasConfirm.src = "./img/eye-open.png"
  }else{
    passwordPageCanvasConfirm.type = "password"
    eyeiconCanvasConfirm.src = "./img/eye-close.png"
  }
  })




 document.addEventListener('DOMContentLoaded', function () {
  let registerButton = document.getElementById('btnRegister');
  registerButton.addEventListener('click', openOffcanvas);

  let offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvas'));
  offcanvas.classlist.add("hide");

  function openOffcanvas() {
      offcanvas.show();
  }
});

const loginPage = document.getElementById("loginPage")
const signInBtn = document.getElementById("signInBtn")
const addRemove = document.getElementById("addRemove")

signInBtn.addEventListener("click",function () {
  
  if(loginPage.value == "admin" && password.value == "123456"
  ){
    
    addRemove.classList.remove("loginPageModal")
    addRemove.classList.add("loginPageAdd")
  }else{
    loginPage.value != ""
    password.value == ""
    alert("Hatalı giriş yaptınız.")
  }


})

AOS.init({
  duration: 1000
 });

