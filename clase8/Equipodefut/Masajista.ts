import Persona from "./Persona";
import Futbolista from "./Futbolista";


class Masajista extends Persona {
    private clientes: Futbolista[];

    public constructor(nombre: string, equipo: string, edad: number, antiguedad: number, sueldo: number, clientes: Futbolista[]){

        super(nombre, equipo, edad, antiguedad, sueldo);
        this.clientes = clientes;
    }

    public Masajear(){
        console.log("Masajeando...")
    }
    public Rehabilitar(nombre){
        let jugador = this.clientes.find(Jugador => Jugador.getNombre() == nombre)
            
        if(jugador){
            this.clientes.splice(this.clientes.indexOf(jugador), 1);
            console.log("Cliente Rehabilitado");
            return this.clientes;
        }
        else{
            console.log("No tenniamos ese cliente");
        }
    }

}