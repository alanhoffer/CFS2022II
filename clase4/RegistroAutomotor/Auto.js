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
  
    Auto.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };


    return Auto;
}());
exports["default"] = Auto;
