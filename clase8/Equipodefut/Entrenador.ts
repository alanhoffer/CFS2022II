import Persona from "./Persona";
import Futbolista from "./Futbolista";

class Entrenador extends Persona{
    private jugadores: Futbolista[];
    private titular:boolean;

    public constructor(nombre: string, equipo: string, edad: number, antiguedad: number, sueldo: number, jugadores: Futbolista[]){

        super(nombre, equipo, edad, antiguedad, sueldo);
        this.jugadores = jugadores;
    }

    public Dirigir(){
        console.log("Dirigiendo...")
    }

    public Entrenar(nombre){
            let jugador = this.jugadores.find(Jugador => Jugador.getNombre() == nombre)
            
            if(jugador){
                this.jugadores.splice(this.jugadores.indexOf(jugador), 1);
                console.log("Jugador Entrenado");
                return this.jugadores;
            }
            else{
                console.log("El jugador no estaba entrenando");
            }
    }

    public Planifica(){
        console.log("Planificando...")
    }




}