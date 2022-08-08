import Auto from "./Auto";

class AutoCarrera extends Auto {

    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }


    public acelerar() {
        this.velocidad += 50;
    }
}