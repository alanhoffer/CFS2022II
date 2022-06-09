import * as readlineSync from 'readline-sync';
// Ejercicio

let mensaje = "Hola Mundo"

console.log(`Mensaje: ${mensaje}`);


let base = readlineSync.question("Ingrese la base: ");
let altura = readlineSync.question("Ingrese la altura: ");

console.log(`Base: ${base} Altura: ${altura}`);


