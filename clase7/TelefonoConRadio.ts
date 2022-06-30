import Telefono from "./Telefono";

class TelefonoConRadio extends Telefono{

    frecuenciaActual:number;

    verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }

    cambiarFrecuenciaActual(frecuencia:number){
        this.frecuenciaActual = frecuencia;
    }

}