let temperatura;
function VerificarTemperatura() {
    const max=document.getElementById("temp_max")
    const min=document.getElementById("temp_min")
    if(max.value=="" || min.value==""){
        document.getElementById("avisos").innerHTML += "AVISO!:Debes introducir las temperaturas maxima y minima.<br>";
        temperatura = 1;
    }else if(parseInt(max.value) <= parseInt(min.value)){
        document.getElementById("avisos").innerHTML += "AVISO!:La temperatura máxima no puede ser menor o igual a la temperatura mínima.<br>";
        temperatura = 1;
    }else if(parseInt(max.value) > 26 || parseInt(min.value) < 22){
        sessionStorage.avisotemp = "AVISO!:La temperatura tiene que estar entre 26 y 22 grados.<br>";
        temperatura = 0;
    }else{
        temperatura = 0;
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
function coordsCiudad(event){
    let ciudad = document.getElementById("ciudad").value;
    if(ciudad == ""){
        event.preventDefault();
        document.getElementById("avisos").innerHTML += "AVISO!:Debes introducir una ciudad <br>"; 
        sessionStorage.botonCiudad = "none";
    }else{
        sessionStorage.botonCiudad = "inline-block";
        sessionStorage.ciudadEnviada = ciudad;
    }
}
function botonCiudadMaps(){
    let botonCiudad = document.getElementById("botonciudad");
    if (sessionStorage.botonCiudad == "inline-block") {
        botonCiudad.style.display = "inline-block";
    } else {
        botonCiudad.style.display = "none";
    }
    sessionStorage.removeItem("botonCiudad");
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
function abrirMapsCiudad(){
    let ciudad = sessionStorage.ciudadEnviada;
    let suma;
    suma = "https://www.google.com/maps?q=" + ciudad;
    window.open(suma,"_blank");
}
function abrirMaps(){
    let coordenadas = sessionStorage.coordenadasEnviadas;
    let suma;
    suma = "https://www.google.com/maps?q=" + coordenadas;
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
    let botonciudad = document.getElementById("botonciudad");
    if (errores.innerHTML !== "") {
        event.preventDefault();
        ventana.style.display = "block";
        sessionStorage.boton = "none";
        sessionStorage.removeItem("coordenadasEnviada");
        sessionStorage.removeItem("ciudadEnviadas");
        sessionStorage.botonCiudad = "none";
        botoncoords.style.display = "none";
        botonciudad.style.display = "none";
    }else{
        ventana.style.display = "none";
    }
}
function enviarTemperatura(){
    let mensaje= sessionStorage.avisotemp;
    let ventana = document.getElementById("ventana");
    let avisos = document.getElementById("avisos");
    if (mensaje){
        avisos.innerHTML = mensaje;
        ventana.style.display = "block";
        sessionStorage.removeItem("avisotemp");
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
let operandoActual = "";
let operandoAnterior = "";
let operacionPendiente = undefined;
let unidadActual = "C"
var indice = 0;
function Numerointroducido(numero) {
    if (typeof operandoActual === "number") {
        operandoActual = numero; 
            } 
    else {
         operandoActual = operandoActual + numero;
            }
    MostrarporPantalla();
        }
function Operacion(operador) {
    switch (operador) {  
        case "-":
            if (operandoActual === ""){
                    operandoActual = "-";
                    MostrarporPantalla();
                    return;
                    }
            break; 

        case "^":
            if (operandoActual === "" || operandoActual === "-") {
                alert("Introduce un valor antes de elevar al cuadrado.");
                return;
            }
            let actual = Number(operandoActual);
            operandoActual = Number((actual * actual).toFixed(2));
            Historial(actual + "² = " + operandoActual + " º" + unidadActual);
            MostrarporPantalla();
            return;
        }
    if (operandoActual === "" || operandoActual === "-") {
        alert("Introduce un valor antes de seleccionar una operación.");
        return;
    }
    if (operandoAnterior !== "") {
        Calcular();
    }
    operacionPendiente = operador;
    operandoAnterior = operandoActual;
    operandoActual = "";
}
function Calcular() {
    let resultado;
    let anterior = Number(operandoAnterior);
    let actual = Number(operandoActual);
    switch (operacionPendiente) {
        case "+":
            resultado = anterior + actual;
            break;
        case "-":
            resultado = anterior - actual;
            break;
        case "*":
            resultado = anterior * actual;
            break;
        case "/":
            resultado = anterior / actual;
            break;
        case "^":
            resultado = actual * actual;
            break;
        default:
            alert("Faltan números para realizar la operación seleccionada");
            return; 
    }
    operandoActual = Number(resultado.toFixed(2));
    Historial(anterior + " " + operacionPendiente + " " + actual + " = " + operandoActual + " º" + unidadActual);
    operacionPendiente = undefined;
    operandoAnterior = "";
    MostrarporPantalla();
}
function Borrar() {
    operandoActual = "";
    operandoAnterior = "";
    operacionPendiente = undefined;
    MostrarporPantalla();
}
function CambioaCelsius() {
    if (operandoActual === "" || operandoActual === "-"){ 
        return;
    }
    let valor = Number(operandoActual);
    let resultadoC;
    if (unidadActual === "F") {
        resultadoC = (valor - 32) * 5/9;
    } 
    else if (unidadActual === "K") {
        resultadoC = valor - 273.15;
    } 
    else {
        return;
    } 
    operandoActual = Number(resultadoC.toFixed(2));
    unidadActual = "C";
    Historial("Conversión: " + valor + " º" + unidadActual + " -> " + operandoActual + " ºC");
    MostrarporPantalla();
} 
function CambioaFahrenheit() {
    if (operandoActual === "" || operandoActual === "-"){ 
        return;
    }
    let valor = Number(operandoActual);
    let resultadoF;
    if (unidadActual === "C") {
        resultadoF = (valor * 9/5) + 32;
    }
    else if (unidadActual === "K") {
    resultadoF = (valor - 273.15) * 9/5 + 32;
    } 
    else {
        return;
    }
    operandoActual = Number(resultadoF.toFixed(2));
    unidadActual = "F";
    Historial("Conversión: " + valor + " º" + unidadActual + " -> " + operandoActual + " ºF");
    MostrarporPantalla();
}
function CambioaKelvin() {
    if (operandoActual === "" || operandoActual === "-"){ 
        return;
    }
    let valor = Number(operandoActual);
    let resultadoK;
    if (unidadActual === "C") {
        resultadoK = valor + 273.15;
    } 
    else if (unidadActual === "F") {
        resultadoK = (valor - 32) * 5/9 + 273.15;
    } 
    else {
        return; 
    }
    operandoActual = Number(resultadoK.toFixed(2));
    unidadActual = "K";
    Historial("Conversión: " + valor + " º" + unidadActual + " -> " + operandoActual + " ºK");
    MostrarporPantalla();
}
function MostrarporPantalla() {
    if (operandoActual !== "") {
        document.getElementById("pantalla").value = operandoActual + " º" + unidadActual;
    } 
    else {
    document.getElementById("pantalla").value = "";
    }
}
function Historial(texto) {
    indice++;
    var nuevoElemento = document.createElement("li");
    var nodoTexto = document.createTextNode("Operación " + indice + ": " + texto);
    nuevoElemento.appendChild(nodoTexto);
    var lista = document.getElementById("miLista");
    lista.appendChild(nuevoElemento);
    if (lista.children.length > 10) {
        lista.removeChild(lista.children[0]);
    }
}