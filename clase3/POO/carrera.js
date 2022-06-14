"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var Carrera = /** @class */ (function () {
    function Carrera(distancia, duracion) {
        this.participantes = [];
        this.puestos = [];
        this.distancia = distancia;
        this.duracion = duracion;
    }
    Carrera.prototype.addParticipante = function (nombre, velocidad) {
        var auto = new auto_1.Auto(nombre, velocidad);
        this.participantes.push(auto);
    };
    Carrera.prototype.getParticipantes = function () {
        return this.participantes;
    };
    Carrera.prototype.iniciarCarrera = function () {
        var tiempo = 0;
        while (tiempo < this.duracion) {
            for (var _i = 0, _a = this.participantes; _i < _a.length; _i++) {
                var auto = _a[_i];
                auto.posicion += auto.velocidad;
                if (auto.posicion === this.distancia) {
                    this.puestos.push(auto);
                }
            }
            tiempo++;
        }
        console.log("Primer puesto: ", this.puestos[0].modelo);
    };
    return Carrera;
}());
var carrera = new Carrera(100, 10);
carrera.addParticipante('ferrari gt96', 5);
carrera.addParticipante('audi tt', 20);
carrera.addParticipante('fiat 147 al piso', 25);
carrera.iniciarCarrera();
