import Vehiculo from './Vehiculo';

class Camioneta extends Vehiculo {

    constructor(){
        super();
    }

    public acelerar(): void {
        this.velocidadActual += 5;
    }
}