"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var Libro_1 = require("./Libro");
var GestorLibros = /** @class */ (function () {
    function GestorLibros(lista) {
        if (lista) {
            this.lista_libros = lista;
        }
    }
    GestorLibros.prototype.getLibro = function (nombre) {
        var libro = this.lista_libros.find(function (Libro) { return Libro.getNombre() == nombre; });
        if (libro) {
            console.log("Hemos encontrado el libro: ", libro);
            return libro;
        }
        else {
            console.log("No hemos encontrado el libro.");
        }
    };
    GestorLibros.prototype.agregarLibro = function (nombre, texto, autor, fecha) {
        var libro = new Libro_1.Libro(nombre, texto, autor, fecha);
        this.lista_libros.push(libro);
        console.log("Libro Agregado: ", libro);
        return this.lista_libros;
    };
    GestorLibros.prototype.eliminarLibro = function (nombre) {
        var libro = this.lista_libros.find(function (Libro) { return Libro.getNombre() == nombre; });
        if (libro) {
            this.lista_libros.splice(this.lista_libros.indexOf(libro), 1);
            console.log("Libro Eliminado");
            return this.lista_libros;
        }
        else {
            console.log("No se encontro el libro");
        }
    };
    GestorLibros.prototype.modificarLibro = function (nombre, texto, fecha, autor) {
        var libro = this.lista_libros.find(function (Libro) { return Libro.getNombre() == nombre; });
        if (libro) {
            console.log("Hemos encontrado el libro: ", nombre);
            if (texto && texto.length > 0) {
                libro.setTexto(texto);
            }
            if (fecha && fecha.length > 0) {
                libro.setFecha(fecha);
            }
            if (autor && autor.length > 0) {
                libro.setAutor(autor);
            }
            console.log("Libro modificado: ", libro);
        }
        else {
            console.log("No hemos encontrado el libro");
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
