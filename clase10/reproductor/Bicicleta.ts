import {Reproductor} from './Reproductor'
import { Audio } from "./Audio"

class Bicicleta implements Reproductor {

    private listaAudios: Audio[];


    private agregarAudio(Id:number, titulo:string, duracion:number, artista:string): void{
        let song = new Audio(Id, titulo, duracion, artista);
        this.listaAudios.push(song);
    }
    
    private eliminarAudio(Id:number){

        let song = this.listaAudios.find(Song => Song.getId() == Id)
        if(song){
            this.listaAudios.splice(this.listaAudios.indexOf(song), 1);
            console.log("Vehiculo Eliminado");
            return this.listaAudios;
        }
        else{
            console.log("No se encontro el vehiculo");
        }

    }
    reproducirAudio(Id:number): void{

            let song = this.listaAudios.find(Song => Song.getId() == Id)
            if(song){
                console.log("Reproduciendo", song.getTitulo())
            }
            else{
                console.log("No se encontro la cancion");
            }
    }

}