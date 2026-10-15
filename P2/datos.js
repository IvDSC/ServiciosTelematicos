function VerificarTemperatura() {
    const max=document.getElementById("temp_max")
    const min=document.getElementById("temp_min")
    if (parseInt(max.value) <= parseInt(min.value)) {
        alert("La temperatura máxima no puede ser menor o igual a la temperatura mínima.");
    }else if(parseInt(max.value) >= 26 && parseInt(min.value) <= 22){
        alert("La temperatura tiene que estar entre 26 y 22 grados");
    }else{
        alert("Datos enviados");
    }
}
function guardarNombre() {
    let NombreEscrito = document.getElementById("inputNombre").value;
    let reglaSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;   
    if (reglaSoloLetras.test(NombreEscrito)) {     
        if (typeof(Storage) !== "undefined") {
                sessionStorage.fname = NombreEscrito;
                alert("Nombre guardado correctamente");
            }
        }
    else{
        alert("Nombre incorrecto; debes meter un nombre (que no contenga valores numericos ni caracteres especiales)");
    }
}
function cambiarNombre(){
    let nombre = sessionStorage.getItem("fname");
    if (nombre) {
    document.getElementById("informacion").innerHTML = "<span> Hola: </span> <span class='nombre'> " + sessionStorage.fname + " </span> <br> <span> Bienvenido a SmartRoom</span>";
    }
}
function comprobarPaises(){
    let pais = document.getElementById("pais").value;
    let paises = ['españa','francia','italia','alemania','portugal'];
    pais = pais.trim().toLowerCase();
    if (paises.includes(pais)) {
        alert("País correcto");
    } else {
        alert("País incorrecto");
        return;
    }
}

function coordsGPS(event){
    event.preventDefault();
    let coordenadas = document.getElementById("coordenadas").value;
    let suma;
        suma = "https://www.google.com/maps/place/" + coordenadas;
        document.getElementById("url").value= suma;
    }
function ComprobarCorreo(){
    //sessionStorage.fname
    let correo = document.getElementById("inputCorreo").value;
    let partes = correo.split("@");
    
    if (partes.length == 2 && partes[0].length > 0 && ["gmail.com", "edu.uah.es"].includes(partes[1]) && !partes[0].includes(" ")) {
        alert("Correo correcto");
    }else{
        alert("Correo incorrecto");
    }
}
function ComprobarCorreo2(){
    let correo = document.getElementById("inputCorreo").value;
    let reglascorreo = /^[a-zA-Z0-9\.]+@(gmail\.com|edu\.uah\.es)$/;
    if (reglascorreo.test(correo)) {
        alert("Correo correcto");
    }else{
        alert("Correo incorrecto");
    }
}