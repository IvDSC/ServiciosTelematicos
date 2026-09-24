function VerificarTemperatura() {
    const max=document.getElementById("max")
    const min=document.getElementById("min")
    if (parseInt(max.value) <= parseInt(min.value)) {
        alert("La temperatura máxima no puede ser menor o igual a la temperatura mínima.");
    }else{
        alert("Datos enviados")
    }
}