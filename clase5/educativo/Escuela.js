"use strict";
exports.__esModule = true;
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre) {
        this.alumnos = [];
        this.profesores = [];
        this.nombre = nombre;
    }
    Escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Escuela.prototype.setAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.delAlumno = function (name) {
        var alumno = this.alumnos.find(function (alumno) { return alumno.getNombre() == name; });
        if (alumno) {
            this.alumnos.slice(this.alumnos.indexOf(alumno), 1);
        }
    };
    Escuela.prototype.getProfesores = function () {
        return this.profesores;
    };
    Escuela.prototype.setProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.delProfesor = function (name) {
        var alumno = this.profesores.find(function (profesor) { return profesor.getNombre() == name; });
        if (alumno) {
            this.profesores.slice(this.profesores.indexOf(alumno), 1);
        }
    };
    return Escuela;
}());
exports.Escuela = Escuela;
