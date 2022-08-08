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
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, equipo, edad, antiguedad, sueldo, posicion, pie, numero, goles) {
        var _this = _super.call(this, nombre, equipo, edad, antiguedad, sueldo) || this;
        _this.posicion = posicion;
        _this.pie = pie;
        _this.numero = numero;
        _this.goles = goles;
        return _this;
    }
    Futbolista.prototype.Entrenar = function () {
        console.log("Entrenando...");
    };
    Futbolista.prototype.HacerGol = function () {
        this.goles += 1;
    };
    Futbolista.prototype.Jugar = function () {
        console.log("Jugando...");
    };
    Futbolista.prototype.Atajar = function (posicion) {
        if (posicion == "arquero")
            console.log("Atajando...");
    };
    Futbolista.prototype.HacerFalta = function () {
        console.log("Le rompio la pierna al compañero");
    };
    Futbolista.prototype.getNombre = function () {
        return this.nombre;
    };
    return Futbolista;
}(Persona_1["default"]));
exports["default"] = Futbolista;
