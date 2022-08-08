export default class Auto {
    
    public nombre: string;
    public marca: string;
    public modelo: string;
    private patente: string;


    constructor(nombre: string, marca: string, modelo: string, patente: string) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getPatente(): string {
        return this.patente;
    }

    setPatente(patente: string): void {
        this.patente = patente;
    }



}