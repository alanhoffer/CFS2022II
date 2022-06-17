"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(nombre, marca, modelo, patente) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    Auto.prototype.getNombre = function () {
        return this.nombre;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
exports["default"] = Auto;
