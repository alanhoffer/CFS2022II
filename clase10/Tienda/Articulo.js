"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Articulo = /** @class */ (function () {
    function Articulo(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    Object.defineProperty(Articulo.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Articulo.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (nuevoNombre) {
            try {
                if (nuevoNombre.length > 4) {
                    this.nombre = nuevoNombre;
                }
                else {
                    throw new Error("Demaciado corto pa");
                }
            }
            catch (e) {
                console.log("Error con el nuevo nombre", e);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Articulo.prototype, "Precio", {
        get: function () {
            return this.precio;
        },
        set: function (nuevoPrecio) {
            try {
                this.precio = nuevoPrecio;
            }
            catch (e) {
                console.log("Error con el nuevo precio", e);
            }
        },
        enumerable: false,
        configurable: true
    });
    return Articulo;
}());
exports.default = Articulo;
