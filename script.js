function iniciarTemporizador() {
    var duraciones = document.querySelectorAll(".duracion");
    duraciones.forEach(function(duracionInput) {
        var duracion = parseInt(duracionInput.value) * 60; // Convertir minutos a segundos

        if (isNaN(duracion) || duracion <= 0) {
            alert("Por favor, ingresa una duración válida en minutos.");
            return;
        }

        var temporizador = duracionInput.nextElementSibling.nextElementSibling;
        var tiempo = duracion;

        var intervalo = setInterval(function() {
            var horas = Math.floor(tiempo / 3600);
            var minutos = Math.floor((tiempo % 3600) / 60);
            var segundos = tiempo % 60;
            temporizador.textContent = 
                (horas < 10 ? "0" : "") + horas + ":" +
                (minutos < 10 ? "0" : "") + minutos + ":" +
                (segundos < 10 ? "0" : "") + segundos;

            if (tiempo === 0) {
                clearInterval(intervalo); // Detener el temporizador cuando llegue a cero
                alert("¡Tiempo terminado!");
            } else {
                tiempo--;
            }
        }, 1000);
    });
}
