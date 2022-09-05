import Vehiculo from "./Vehiculo";

export default class Moto extends Vehiculo {

    private motoColgada:boolean = false;


    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }

    public colgarMoto(){
        this.motoColgada = !this.motoColgada;
    }

}