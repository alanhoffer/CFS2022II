"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto_votantes = fs.readFileSync('votantes.txt', 'utf8');
var texto_colegios = fs.readFileSync('colegios.txt', 'utf8');
var arreglo_votantes = texto_votantes.split('-');
var arreglo_colegios = texto_colegios.split('-');
function buscarDondeVoto(votante) {
    if (arreglo_votantes.find(function (persona) { return persona === votante; })) {
        if (votante.startsWith("p")) {
            return arreglo_colegios[0];
        }
        else if (votante.startsWith("m")) {
            return arreglo_colegios[1];
        }
        else if (votante.startsWith("l")) {
            return arreglo_colegios[2];
        }
    }
    else {
        return "\rNo pue\rdes votar";
    }
}
console.log(buscarDondeVoto("pepe3"));
