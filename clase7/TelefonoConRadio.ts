import Telefono from "./Telefono";

class TelefonoConRadio extends Telefono{

    private frecuenciaActual:number;

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }

    public cambiarFrecuenciaActual(frecuencia:number){
        this.frecuenciaActual = frecuencia;
    }

}