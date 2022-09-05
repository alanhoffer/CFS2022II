"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Tienda_1 = require("./Tienda");
var Articulo_1 = require("./Articulo");
function importTxt() {
    var textoTxt = fs.readFileSync('importarArt.txt', 'utf8');
    var arregloArticulosTxt = textoTxt.split(':');
    var arregloArticulos = [];
    arregloArticulosTxt.forEach(function (artstring) {
        var infoArticulo = artstring.split('-');
        var articulo = new Articulo_1.default(Number(infoArticulo[0]), infoArticulo[1], Number(infoArticulo[2]));
        arregloArticulos.push(articulo);
    });
    return arregloArticulos;
}
function exportTxt(arregloVendidos) {
    var textoTxt = "";
    arregloVendidos.forEach(function (articuloVendido) {
        textoTxt += articuloVendido.Id + "-" + articuloVendido.Nombre + "-" + articuloVendido.Precio + ":";
    });
    fs.writeFileSync('ExportarArt.txt', textoTxt);
}
var mytienda = new Tienda_1.default();
mytienda.importarArticulos(importTxt());
var arrayarticulosexportar = mytienda.exportarVendidos();
exportTxt(arrayarticulosexportar);
