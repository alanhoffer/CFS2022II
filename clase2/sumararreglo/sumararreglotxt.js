"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('arreglo.txt', 'utf8');
var arreglo = texto.split(' ');
function sumarArreglo(arreglo) {
    var resultado = 0;
    for (var i = 0; i < arreglo.length; i++) {
        resultado += Number(arreglo[i]);
    }
    return resultado;
}
console.log(sumarArreglo(arreglo));
