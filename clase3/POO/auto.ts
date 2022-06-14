import * as readlineSync from 'readline-sync';


export class Auto {
    modelo: string;
    horsepower: number;
    posicion: number = 0;


    constructor(modelo: string, horsepower: number) {
        this.modelo = modelo;
        this.horsepower = horsepower;
    }

}

// let bucle = true;

// let bmw = new Auto('bmw', 2020);


// while (bucle){
//     let opcion = readlineSync.question('Que desea hacer? (1 Acelerar) (2 Frenar) (3 Luces) (4 Salir): ');
//     switch (opcion){
//         case '1':
//             bmw.acelerar();
//             break;
//         case '2':
//             bmw.frenar();
//             break;
//         case '3':
//             bmw.toggleLuces();
//             break;
//         case '4':
//             console.log('Saliendo...');
//             bucle = false;
//             break;
//         default:
//             console.log('Opcion no valida');
//             break;
//     }
    
// }