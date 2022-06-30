"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var fs = require("fs");
var GestorLibros_1 = require("./GestorLibros");
var Libro_1 = require("./Libro");
var todos_libros = fs.readFileSync('Libros.txt', 'utf8');
var gestorLibros;
var arreglo_libros_txt = todos_libros.split('/');
var arreglo_libros = [];
arreglo_libros_txt.forEach(function (libro) {
    var xlibro = libro.split("-");
    arreglo_libros.push(new Libro_1.Libro(xlibro[0], xlibro[1], xlibro[2], xlibro[3]));
});
if (arreglo_libros.length > 0) {
    gestorLibros = new GestorLibros_1.GestorLibros(arreglo_libros);
}
else {
    gestorLibros = new GestorLibros_1.GestorLibros();
}
console.log(gestorLibros);
var bucle = true;
while (bucle) {
    var opcion = readlineSync.question('Que desea hacer? (1 Buscar Libro) (2 Agregar Libro) (3 Modificar Libro) (4 Eliminar Libro) (5 Salir): ');
    switch (opcion) {
        case '1':
            var buscar_nombre = readlineSync.question('Escriba el nombre: ');
            gestorLibros.getLibro(buscar_nombre);
            break;
        case '2':
            var agregar_nombre = readlineSync.question('Escriba el nombre: ');
            var agregar_texto = readlineSync.question('Escriba el texto: ');
            var agregar_autor = readlineSync.question('Escriba el autor: ');
            var agregar_fecha = readlineSync.question('Escriba el fecha: ');
            gestorLibros.agregarLibro(agregar_nombre, agregar_texto, agregar_autor, agregar_fecha);
            break;
        case '3':
            var modificar_nombre = readlineSync.question('Escriba el nombre: ');
            var modificar_texto = readlineSync.question('Escriba el texto: ');
            var modificar_autor = readlineSync.question('Escriba el autor: ');
            var modificar_fecha = readlineSync.question('Escriba el fecha: ');
            gestorLibros.modificarLibro(modificar_nombre, modificar_texto, modificar_autor, modificar_fecha);
            break;
        case '4':
            var eliminar_nombre = readlineSync.question('Escriba el nombre: ');
            gestorLibros.eliminarLibro(eliminar_nombre);
            break;
        case '5':
            console.log('Saliendo...');
            bucle = false;
            break;
        default:
            console.log('Opcion no valida');
            break;
    }
}
