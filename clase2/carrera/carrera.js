"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var vueltas = 4;
function calcularTiempo(vueltas) {
    var tiempo_total = 0;
    for (var i = 0; i < vueltas; i++) {
        var tiempo_vuelta = readlineSync.questionFloat("Ingrese el tiempo(min) de vuelta(".concat(i, "): "));
        tiempo_total += tiempo_vuelta;
    }
    return tiempo_total;
}
var tiempo_resultante = calcularTiempo(vueltas);
var mensaje = "Tiempo total: ".concat(tiempo_resultante, " min - Tiempo promedio: ").concat(tiempo_resultante / vueltas, " min");
console.log(mensaje);
