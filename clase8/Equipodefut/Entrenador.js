"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, equipo, edad, antiguedad, sueldo, jugadores) {
        var _this = _super.call(this, nombre, equipo, edad, antiguedad, sueldo) || this;
        _this.jugadores = jugadores;
        return _this;
    }
    Entrenador.prototype.Dirigir = function () {
        console.log("Dirigiendo...");
    };
    Entrenador.prototype.Entrenar = function (nombre) {
        var jugador = this.jugadores.find(function (Jugador) { return Jugador.getNombre() == nombre; });
        if (jugador) {
            this.jugadores.splice(this.jugadores.indexOf(jugador), 1);
            console.log("Jugador Entrenado");
            return this.jugadores;
        }
        else {
            console.log("El jugador no estaba entrenando");
        }
    };
    Entrenador.prototype.Planifica = function () {
        console.log("Planificando...");
    };
    return Entrenador;
}(Persona_1["default"]));
