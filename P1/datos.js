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
            if (typeof(Storage) !== "undefined") {
                localStorage.fname = document.getElementById("inputNombre").value;
                alert("Nombre guardado correctamente");
            }
        }
function cambiarNombre(){

    let nombre = localStorage.getItem("fname");
    if (nombre) {
    document.getElementById("informacion").innerHTML = "<span> Hola: </span> <span class='nombre'> " + localStorage.fname + " </span> <br> <span> Bienvenido a SmartRoom</span>";
    }
}