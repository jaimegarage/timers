function iniciarTemporizador(id, tiempoInicial = 0) {
    var temporizador = document.getElementById(id);
    var tiempo = tiempoInicial;
    setInterval(function() {
        tiempo++;
        var horas = Math.floor(tiempo / 3600);
        var minutos = Math.floor((tiempo % 3600) / 60);
        var segundos = tiempo % 60;
        temporizador.textContent = 
            (horas < 10 ? "0" : "") + horas + ":" +
            (minutos < 10 ? "0" : "") + minutos + ":" +
            (segundos < 10 ? "0" : "") + segundos;
    }, 1000);
}

// Iniciar el temporizador en 10 segundos
iniciarTemporizador("temporizador", 10);
