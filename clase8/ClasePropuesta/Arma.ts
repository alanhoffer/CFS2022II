export default class Arma {

    protected nombre:string;
    protected daño:number;


    constructor(nombre: string, daño:number){
        this.nombre = nombre;
        this.daño = daño;
    }

    public atacar(): void {

    }
}
