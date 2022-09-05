"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(nombre, marca, modelo, patente) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    Vehiculo.prototype.getNombre = function () {
        return this.nombre;
    };
    Vehiculo.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
