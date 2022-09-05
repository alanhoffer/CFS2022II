"use strict";
exports.__esModule = true;
var Televisor = /** @class */ (function () {
    function Televisor(decodificador) {
        this.decodificador = decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        this.estaPrendido != this.estaPrendido;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual++;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual--;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual++;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canalActual--;
    };
    Televisor.prototype.cambiarCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor.prototype.verCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.verVolumenActual = function () {
        return this.volumenActual;
    };
    return Televisor;
}());
