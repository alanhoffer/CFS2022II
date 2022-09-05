
export default abstract class Vehiculo {

    protected velocidadActual: number;
    private estaPrendido: boolean;
    
    public constructor() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    
    abstract acelerar(): void;
    
    public prender(): void {
        this.estaPrendido = true;
    }
    
    public apagar(): void {
        this.estaPrendido = false;
    }

}