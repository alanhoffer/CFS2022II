import Telefono from "./Telefono";

class TelefonoConRadio extends Telefono{

    private frecuenciaActual:number;

    constructor(){
        super();
    }

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }

    public cambiarFrecuenciaActual(frecuencia:number){
        this.frecuenciaActual = frecuencia;
    }

}