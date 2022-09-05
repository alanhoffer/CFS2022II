import Vehiculo from "./Vehiculo";

export default class Camion extends Vehiculo{

    
    private alturaCaja:number = 0;

    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }
    
    public elevarCaja(){
        this.alturaCaja++
    }
    
}