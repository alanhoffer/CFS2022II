import Arma from "./Arma";

class Espada extends Arma {

    constructor(nombre:string, daño:number){
        super(nombre, daño);
    }

    public atacar(): void {
        console.log("Atacando con el daño de", this.daño)
    }
}