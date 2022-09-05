"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.llamar = function (numero) {
        if (numero === void 0) { numero = 1; }
        console.log("Llamando al numero: ", numero);
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("Sacaste una foto.");
    };
    return SmartPhone;
}());
var xia = new SmartPhone();
console.log(xia.llamar(2));
