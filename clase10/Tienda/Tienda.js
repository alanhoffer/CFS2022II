"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Articulo_1 = require("./Articulo");
var Tienda = /** @class */ (function () {
    function Tienda(listaArticulos) {
        if (listaArticulos === void 0) { listaArticulos = []; }
        this.listaArticulos = listaArticulos;
    }
    Tienda.prototype.agregarArticulos = function (id, nombre, precio) {
        try {
            var articulo = new Articulo_1.default(id, nombre, precio);
            if (articulo) {
                this.listaArticulos.push(articulo);
            }
            else {
                throw new Error("Error al crear el articulo nidea pq");
            }
        }
        catch (_a) {
            console.log("Error al crear el articulo nidea pq");
        }
    };
    Tienda.prototype.venderArticulo = function (id) {
        var articulo = this.listaArticulos.find(function (art) { return art.Id == id; });
        if (articulo) {
            this.listaArticulos.splice(this.listaArticulos.indexOf(articulo), 1);
            this.listaVendidos.push(articulo);
            console.log("Articulo vendido", articulo.Nombre);
        }
        else {
            console.log("No se encontro el Articulo");
        }
    };
    Tienda.prototype.importarArticulos = function (listaArticulosImp) {
        var _this = this;
        listaArticulosImp.forEach(function (articulo) { return _this.listaArticulos.push(articulo); });
    };
    Tienda.prototype.exportarVendidos = function () {
        return this.listaArticulos;
    };
    return Tienda;
}());
exports.default = Tienda;
