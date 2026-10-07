function VerificarTemperatura() {
    const max=document.getElementById("max")
    const min=document.getElementById("min")
    if (parseInt(max.value) <= parseInt(min.value)) {
        alert("La temperatura máxima no puede ser menor o igual a la temperatura mínima.");
    }else{
        alert("Datos enviados")
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