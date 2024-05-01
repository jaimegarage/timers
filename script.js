function iniciarTemporizador() {
    var duracionInput = document.getElementById("duracion");
    var duracion = parseInt(duracionInput.value) * 60; // Convertir minutos a segundos

    if (isNaN(duracion) || duracion <= 0) {
        alert("Por favor, ingresa una duración válida en minutos.");
        return;
    }

    var temporizador = document.getElementById("temporizador");
    var tiempo = duracion;

    setInterval(function() {
        var horas = Math.floor(tiempo / 3600);
        var minutos = Math.floor((tiempo % 3600) / 60);
        var segundos = tiempo % 60;
        temporizador.textContent = 
            (horas < 10 ? "0" : "") + horas + ":" +
            (minutos < 10 ? "0" : "") + minutos + ":" +
            (segundos < 10 ? "0" : "") + segundos;

        if (tiempo === 0) {
            clearInterval();
            alert("¡Tiempo terminado!");
        } else {
            tiempo--;
        }
    }, 1000);
}
