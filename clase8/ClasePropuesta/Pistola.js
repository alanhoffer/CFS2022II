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
var Arma_1 = require("./Arma");
var Pistola = /** @class */ (function (_super) {
    __extends(Pistola, _super);
    function Pistola(nombre, daño) {
        return _super.call(this, nombre, daño) || this;
    }
    Pistola.prototype.atacar = function () {
        if (this.balas < 0) {
            console.log("Atacando con el daño de", this.daño);
        }
    };
    return Pistola;
}(Arma_1["default"]));
