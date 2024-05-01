function iniciarTemporizador(id) {
    var temporizador = document.getElementById(id);
    var tiempo = 0;
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

iniciarTemporizador("temporizador1");
iniciarTemporizador("temporizador2");
