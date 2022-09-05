import Auto from "./Auto";

class AutoCiudad extends Auto {

    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }


    public acelerar() {
        this.velocidad += 20;
    }
}