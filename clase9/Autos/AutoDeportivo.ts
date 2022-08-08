import Vehiculo from './Vehiculo';

class AutoDeportivo extends Vehiculo {

    constructor(){
        super();
    }
    
    public acelerar(): void {
        this.velocidadActual += 30;
    }
}