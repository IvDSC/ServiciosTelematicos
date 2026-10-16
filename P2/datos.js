function VerificarTemperatura() {
    const max=document.getElementById("temp_max")
    const min=document.getElementById("temp_min")
    if (parseInt(max.value) <= parseInt(min.value)) {
        document.getElementById("avisos").innerHTML += "AVISO!:La temperatura máxima no puede ser menor o igual a la tempexº    ratura mínima.<br>";
    }else if(parseInt(max.value) > 26 && parseInt(min.value) < 22){
        document.getElementById("avisos").innerHTML += "AVISO!:La temperatura tiene que estar entre 26 y 22 grados.<br>";
    }else if(max.value == "" || min.value == ""){
        document.getElementById("avisos").innerHTML += "AVISO!:Debes introducir las temperaturas máxima y mínima.<br>";
    }else{
        return; 
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
        return;
    } else {
        document.getElementById("avisos").innerHTML += "AVISO!:Escoja un país de los de la lista <br>";
    }
}
function comprobarContrasena(){
    let contrasena=document.getElementById("contraseña").value
    if (contrasena.length < 9){
        document.getElementById("avisos").innerHTML += "AVISO!:La contraseña tiene que tener más de 9 caracteres <br>";
    }else{
        return;
    }
}
function coordsGPS(event){
    let coordenadas = document.getElementById("coordenadas").value;
    if(coordenadas == ""){
        event.preventDefault();
        document.getElementById("avisos").innerHTML += "AVISO!:Debes introducir coordenadas GPS <br>"; 
        sessionStorage.boton = "none";
    }else{
        sessionStorage.boton = "inline-block";
        sessionStorage.coordenadasEnviadas = coordenadas;
    }
}
function botonMaps(){
    let boton = document.getElementById("botoncoords");
    if (sessionStorage.boton == "inline-block") {
        boton.style.display = "inline-block";
    } else {
        boton.style.display = "none";
    }
    sessionStorage.removeItem("boton");
}
function abrirMaps(){
    let coordenadas = sessionStorage.coordenadasEnviadas;
    let suma;
    suma = "https://www.google.com/maps/place/" + coordenadas;
    window.open(suma, "_blank");
}
function ComprobarCorreo(){
    //sessionStorage.fname
    let correo = document.getElementById("inputCorreo").value;
    let partes = correo.split("@");
    if(partes.length == 2 && partes[0].length > 0 && ["gmail.com", "edu.uah.es"].includes(partes[1]) && !partes[0].includes(" ")) {
        alert("El correo es correcto");
    }else{
        alert("El correo es incorrecto");
    }
}
function ComprobarCorreo2(){
    let correo = document.getElementById("inputCorreo").value;
    let reglascorreo = /^[a-zA-Z0-9\.]+@(gmail\.com|edu\.uah\.es)$/;
    if (reglascorreo.test(correo)) {
        alert("El correo es correcto");
    }else{
        alert("El correo es incorrecto");    
    }
}
function mostrarVentana(event){
    let ventana = document.getElementById("ventana");
    let boton = document.getElementById("boton");
    let errores = document.getElementById("avisos");
    let botoncoords = document.getElementById("botoncoords");
    if (errores.innerHTML !== "") {
        event.preventDefault();
        ventana.style.display = "block";
        sessionStorage.boton = "none";
        sessionStorage.removeItem("coordenadasEnviadas");
        botoncoords.style.display = "none";
    }else{
        ventana.style.display = "none";
    }
}
function quitarVentana(event){
    event.preventDefault();
    let ventana= document.getElementById("ventana");
    let boton = document.getElementById("botonventana");
    ventana.style.display = "none" ; 
    document.getElementById("avisos").innerHTML = "";
}   
function limpiarAvisos(){
    document.getElementById("avisos").innerHTML = "";
}