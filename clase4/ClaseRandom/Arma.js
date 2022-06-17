"use strict";
exports.__esModule = true;
exports.Arma = void 0;
var Arma = /** @class */ (function () {
    function Arma(nombre, daño, balas_max) {
        this.nombre = nombre;
        this.daño = daño;
        this.balas_max = balas_max;
    }
    Arma.prototype.disparar = function () {
        if (this.balas_actual > 0) {
            this.balas_actual--;
        }
        else {
            console.log('No tienes balas');
        }
    };
    Arma.prototype.recargar = function () {
        this.balas_actual = this.balas_max;
    };
    return Arma;
}());
exports.Arma = Arma;
var ak47 = new Arma('AK47', 100, 3);
var m4 = new Arma('M4', 200, 6);
ak47.recargar();
ak47.disparar();
ak47.disparar();
ak47.disparar();
ak47.disparar();
ak47.disparar();
