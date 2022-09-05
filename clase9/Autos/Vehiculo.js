"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    Vehiculo.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Vehiculo.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
