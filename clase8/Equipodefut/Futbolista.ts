import Persona from "./Persona";

export default class Futbolista extends Persona {
    private posicion: string;
    private pie: string;
    private numero: number;
    private goles: number;

    public constructor(nombre: string, equipo: string, edad: number, antiguedad: number, sueldo: number, posicion: string, pie: string, numero: number, goles: number){

        super(nombre, equipo, edad, antiguedad, sueldo);
        this.posicion = posicion;
        this.pie = pie;
        this.numero = numero;
        this.goles = goles;
    }

    public Entrenar(){
        console.log("Entrenando...");
    }
    public HacerGol(){
        this.goles += 1;
    }
    public Jugar(){
        console.log("Jugando...");
    }
    public Atajar(posicion){

        if(posicion == "arquero")
            console.log("Atajando...")

    }
    public HacerFalta(){
        console.log("Le rompio la pierna al compañero")
    }

    public getNombre():string{
        return this.nombre;
    }
}