"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombre, texto, autor, fecha) {
        this.nombre = nombre;
        this.texto = texto;
        this.autor = autor;
        this.fecha = fecha;
    }
    Libro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.setTexto = function (texto) {
        this.texto = texto;
    };
    Libro.prototype.getTexto = function () {
        return this.texto;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Libro.prototype.getFecha = function () {
        return this.fecha;
    };
    return Libro;
}());
exports.Libro = Libro;
