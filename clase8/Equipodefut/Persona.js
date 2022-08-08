"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, equipo, edad, antiguedad, sueldo) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.sueldo = sueldo;
    }
    Persona.prototype.Hablar = function () {
        console.log("Hablando...");
    };
    Persona.prototype.Concentrarse = function () {
        console.log("Concentrandose...");
    };
    return Persona;
}());
exports["default"] = Persona;
