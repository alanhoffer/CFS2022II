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
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, equipo, edad, antiguedad, sueldo, clientes) {
        var _this = _super.call(this, nombre, equipo, edad, antiguedad, sueldo) || this;
        _this.clientes = clientes;
        return _this;
    }
    Masajista.prototype.Masajear = function () {
        console.log("Masajeando...");
    };
    Masajista.prototype.Rehabilitar = function (nombre) {
        var jugador = this.clientes.find(function (Jugador) { return Jugador.getNombre() == nombre; });
        if (jugador) {
            this.clientes.splice(this.clientes.indexOf(jugador), 1);
            console.log("Cliente Rehabilitado");
            return this.clientes;
        }
        else {
            console.log("No tenniamos ese cliente");
        }
    };
    return Masajista;
}(Persona_1["default"]));
