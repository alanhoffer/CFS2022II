import * as fs from 'fs'

let texto:string = fs.readFileSync('arreglo.txt', 'utf8')
let arreglo:string[] = texto.split(' ');


function sumarArreglo(arreglo:string[]):number{
    let resultado:number = 0;
    for (let i:number = 0; i < arreglo.length;i++){
        resultado+=Number(arreglo[i])
    }
    return resultado;
}


console.log(sumarArreglo(arreglo));