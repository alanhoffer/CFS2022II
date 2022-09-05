import * as fs from 'fs'
import Tienda from './Tienda'
import Articulo from './Articulo'



function importTxt(): Articulo[]{
    let textoTxt:string = fs.readFileSync('importarArt.txt', 'utf8')
    let arregloArticulosTxt:string[] = textoTxt.split(':');

    let arregloArticulos: Articulo[] = [];

    arregloArticulosTxt.forEach(artstring =>{
        let infoArticulo:string[] = artstring.split('-');

        let articulo = new Articulo(Number(infoArticulo[0]),infoArticulo[1],Number(infoArticulo[2]));

        arregloArticulos.push(articulo);
    })

    return arregloArticulos;

}

function exportTxt(arregloVendidos:Articulo[]){

    let textoTxt = "";

    arregloVendidos.forEach(articuloVendido => {
        textoTxt += articuloVendido.Id + "-" + articuloVendido.Nombre + "-" + articuloVendido.Precio + ":"
    } );

    fs.writeFileSync('ExportarArt.txt', textoTxt)
}




let mytienda = new Tienda();

mytienda.importarArticulos(importTxt());

let arrayarticulosexportar = mytienda.exportarVendidos()

exportTxt(arrayarticulosexportar)


