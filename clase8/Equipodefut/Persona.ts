export default class Persona {

    protected nombre: string;
    protected equipo: string;
    protected edad: number;
    protected antiguedad: number;
    protected sueldo: number;


    public constructor(nombre: string, equipo: string, edad: number, antiguedad: number, sueldo: number){
        this.nombre = nombre;
        this.equipo = equipo;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.sueldo = sueldo;

    }

    public Hablar(){
        console.log("Hablando...")
    }

    public Concentrarse(){
        console.log("Concentrandose...")
    }

}