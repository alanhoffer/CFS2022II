import Vehiculo from './Vehiculo';

class AutoCiudad extends Vehiculo {

    constructor(){
        super();
    }

    public acelerar(): void {
        this.velocidadActual += 10;
    }
}