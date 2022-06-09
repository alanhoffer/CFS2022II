import * as readlineSync from 'readline-sync'


let vueltas:number = 4;

function calcularTiempo(vueltas:number):number{
    
    let tiempo_total:number = 0;

    for (let i:number = 0; i < vueltas; i++) {
        let tiempo_vuelta:number = readlineSync.questionFloat(`Ingrese el tiempo(min) de vuelta(${i}): `);
        tiempo_total += tiempo_vuelta;
    }

    return tiempo_total
}

let tiempo_resultante:number = calcularTiempo(vueltas)
let mensaje: string = `Tiempo total: ${tiempo_resultante} min - Tiempo promedio: ${tiempo_resultante / vueltas} min`;

console.log(mensaje);