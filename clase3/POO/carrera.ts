import {Auto} from './auto';

class Carrera{

    participantes:Auto [] = [];
    distancia:number;
    duracion:number;
    puestos: Auto[] = [];

    constructor(distancia:number, duracion:number){
        this.distancia = distancia;
        this.duracion = duracion;
    }

    addParticipante(nombre:string, velocidad:number):void{
        let auto = new Auto(nombre, velocidad);
        this.participantes.push(auto);
    }

    getParticipantes():Auto[]{
        return this.participantes;
    }

    iniciarCarrera():void{
        let tiempo = 0;
        while(tiempo < this.duracion){
            for(let auto of this.participantes){
                auto.posicion += 1 * auto.hp;
                if(auto.posicion === this.distancia){
                    this.puestos.push(auto);
                }
            }
            tiempo++;
        }

        console.log("Primer puesto: ", this.puestos[0].modelo);

    }





}


let carrera = new Carrera(10000, 10);

carrera.addParticipante('ferrari gt96', 5);
carrera.addParticipante('audi tt', 20);
carrera.addParticipante('fiat 147 al piso', 25);


carrera.iniciarCarrera();