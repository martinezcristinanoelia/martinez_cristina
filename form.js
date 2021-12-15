function validarFormulario(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let selector = document.getElementById("selector").selectedIndex;
    let checkbox= document.getElementById("checkBox");
    let radioBtn= document.getElementsByName("radioButton");
    let boleana = false;
}
//*CAMPO OBLIGATORIO
if (nombre == null || nombre.length == 0){
    alert(
        "ERROR: eL campo NOMBRE no puede quedar vacío");
        return false;
}
if (edad == null || edad.length == 0 || isNaN(edad)){
    alert("Debe ingresar EDAD");
    return false;
}
if (!/\S+@\S+\.\S+/.test(correo) ){
    alert("Error: correo invalido");
    return false;
}
if (!isNaN(fecha)){
    alert("Seleccionar fecha");
    return false;
}
if (selector == null || selector == 0){
    alert("Selector una opción del select")
}
if (!checkbox.checked){
    alert("Seleccionar el checkbox");
    return false;
}
for (let i = 0; i < radioBtn.lenght; i ++) {
    if (radioBtn[i].checked ){
        boleana = true;
        break;
    }
if (!boleana){
    alert("Elegir una opción de radio button");
    return false;
}    
return true
}

