import Arma from "./Arma";

class Pistola extends Arma {

    private balas:number;

    constructor(nombre:string, daño:number){
        super(nombre, daño);
    }

    public atacar(): void {
        if(this.balas < 0){
            console.log("Atacando con el daño de", this.daño)
        }
    }

}