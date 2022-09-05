"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono() {
    }
    Telefono.prototype.mandarMensaje = function (mensaje) {
        this.ultimoMensajeEnviado = mensaje;
        console.log("Mensaje enviado");
    };
    Telefono.prototype.hacerLlamada = function (persona) {
        this.ultimaLlamada = persona;
        console.log("Llamando");
    };
    Telefono.prototype.prenderApagar = function () {
        this.estaPrendido != this.estaPrendido;
    };
    Telefono.prototype.mostrarBateria = function () {
        return this.bateriaActual;
    };
    return Telefono;
}());
exports["default"] = Telefono;
