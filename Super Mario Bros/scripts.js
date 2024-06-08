const form = document.querySelector(".formulario-fale-conosco")
const maskform = document.querySelector(".mascara-formulario")

function abrirForm(){
  
   form.style.left = "50%"
   form.style.transform = "translateX(-50%)"
   maskform.style.visibility = "visible"
}
   
   function esconderForm(){
  
    form.style.left = "-330%"
    form.style.transform = "translateX(0%)"
    maskform.style.visibility = "hidden"
}