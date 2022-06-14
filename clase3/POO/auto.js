"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(modelo, velocidad) {
        this.posicion = 0;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    return Auto;
}());
exports.Auto = Auto;
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
