export default class Vehiculo {
    
    private nombre: string;
    private marca: string;
    private modelo: string;
    private patente: string;


    public constructor(nombre: string, marca: string, modelo: string, patente: string) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }



}