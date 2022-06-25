"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre) {
        this.nombre = nombre;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    Alumno.prototype.getEstado = function () {
        return this.estado;
    };
    Alumno.prototype.setEstado = function (nota) {
        if (nota >= 7) {
            this.estado = "Aprobado";
        }
        else {
            this.estado = "Desaprobado";
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
