"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(ListaVehiculos) {
        if (ListaVehiculos === void 0) { ListaVehiculos = []; }
        this.ListaVehiculos = [];
        this.DadosDeAlta = [];
        this.ListaVehiculos = ListaVehiculos;
    }
    RegistroAutomotor.prototype.getListaVehiculos = function () {
        return this.ListaVehiculos;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.ListaVehiculos.push(vehiculo);

        console.log("Vehiculo Agregado");

        return this.ListaVehiculos;
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (patente) {
        var vehiculo = this.ListaVehiculos.find(function (Auto) { return Auto.getPatente() == patente; });

        if (vehiculo) {
            this.ListaVehiculos.splice(this.ListaVehiculos.indexOf(vehiculo), 1);
            console.log("Vehiculo Eliminado");
            return this.ListaVehiculos;
        }
        else {
            console.log("No se encontro el vehiculo");
        }
    };
    RegistroAutomotor.prototype.actualizarVehiculo = function (patente, newnombre, newmarca, newmodelo, newpatente) {
        var vehiculo = this.ListaVehiculos.find(function (Auto) { return Auto.getPatente() == patente; });
        if (vehiculo) {
            vehiculo.setNombre(newnombre);
            vehiculo.setMarca(newmarca);
            vehiculo.setModelo(newmodelo);
            vehiculo.setPatente(newpatente);
            console.log("Vehiculo Actualizado");
            return this.ListaVehiculos;
        }
        else {
            console.log("No se encontro el vehiculo");
        }
    };
    RegistroAutomotor.prototype.darDeAlta = function (patente) {
        var vehiculo = this.ListaVehiculos.find(function (Auto) { return Auto.getPatente() == patente; });
        if (vehiculo) {
            this.DadosDeAlta.push(vehiculo);
            this.ListaVehiculos.splice(this.ListaVehiculos.indexOf(vehiculo), 1);
            console.log("Vehiculo dado de alta");
            return this.DadosDeAlta;
        }
        else {
            console.log("No se encontro el vehiculo");
        }

    };
    return RegistroAutomotor;
}());
var audi = new Auto_1["default"]("Audi1", "Audi", "1997", "238");
var audi2 = new Auto_1["default"]("Audi2", "Audi", "1997", "237");
var audi3 = new Auto_1["default"]("Audi3", "Audi", "1997", "235");
var audi4 = new Auto_1["default"]("Audi4", "Audi", "1997", "234");

var ListaVehiculos = [audi, audi2];
var registroAuto = new RegistroAutomotor(ListaVehiculos);
registroAuto.agregarVehiculo(audi3);
registroAuto.agregarVehiculo(audi4);

