"use strict";
exports.__esModule = true;
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre, alumnos) {
        this.nombre = nombre;
        this.alumnos = alumnos;
    }
    Profesor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Profesor.prototype.setAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Profesor.prototype.delAlumno = function (name) {
        var alumno = this.alumnos.find(function (alumno) { return alumno.getNombre() == name; });
        if (alumno) {
            this.alumnos.slice(this.alumnos.indexOf(alumno), 1);
        }
    };
    return Profesor;
}());
exports.Profesor = Profesor;
