import * as readlineSync from 'readline-sync';
import * as fs from 'fs'

import { GestorLibros } from './GestorLibros';
import { Libro } from './Libro';



let todos_libros:string = fs.readFileSync('Libros.txt', 'utf8')
let gestorLibros: GestorLibros;


let arreglo_libros_txt:string[] = todos_libros.split('/');
let arreglo_libros: Libro[] = [];

arreglo_libros_txt.forEach(libro => {
    let xlibro = libro.split("-");
    arreglo_libros.push(new Libro(xlibro[0], xlibro[1], xlibro[2], xlibro[3]))
})


if(arreglo_libros.length > 0){
    gestorLibros = new GestorLibros(arreglo_libros);
}
else{
    gestorLibros = new GestorLibros();
}

console.log(gestorLibros)

let bucle = true;

while (bucle){
    let opcion = readlineSync.question('Que desea hacer? (1 Buscar Libro) (2 Agregar Libro) (3 Modificar Libro) (4 Eliminar Libro) (5 Salir): ');
    switch (opcion){
        case '1':
            let buscar_nombre:string = readlineSync.question('Escriba el nombre: ');
            gestorLibros.getLibro(buscar_nombre);
            break;
        case '2':            
            let agregar_nombre:string  = readlineSync.question('Escriba el nombre: ');
            let agregar_texto:string  = readlineSync.question('Escriba el texto: ');
            let agregar_autor:string  = readlineSync.question('Escriba el autor: ');
            let agregar_fecha:string  = readlineSync.question('Escriba el fecha: ');
            gestorLibros.agregarLibro(agregar_nombre, agregar_texto, agregar_autor, agregar_fecha);
            break;
        case '3':
            
            let modificar_nombre:string = readlineSync.question('Escriba el nombre: ');
            let modificar_texto:string  = readlineSync.question('Escriba el texto: ');
            let modificar_autor:string  = readlineSync.question('Escriba el autor: ');
            let modificar_fecha:string  = readlineSync.question('Escriba el fecha: ');
            gestorLibros.modificarLibro(modificar_nombre, modificar_texto, modificar_autor, modificar_fecha);
            break;
        case '4':
            let eliminar_nombre:string = readlineSync.question('Escriba el nombre: ');
            gestorLibros.eliminarLibro(eliminar_nombre)
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