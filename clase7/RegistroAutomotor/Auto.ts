import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo{


    private gps:boolean = false;
 
    constructor(nombre, marca, modelo, patente){
        super(nombre, marca, modelo, patente);
    }
    
    public activarGps(){
        this.gps = !this.gps;
    }
}