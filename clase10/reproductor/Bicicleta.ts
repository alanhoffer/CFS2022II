import {Reproductor} from './Reproductor'
import { Audio } from "./Audio"

class Bicicleta implements Reproductor {

    private listaAudios: Audio[];


    public agregarAudio(Id:number, titulo:string, duracion:number, artista:string): void{
        let song = new Audio(Id, titulo, duracion, artista);
        this.listaAudios.push(song);
    }
    
    public eliminarAudio(Id:number){

        let song = this.listaAudios.find(Song => Song.getId() == Id)
        if(song){
            this.listaAudios.splice(this.listaAudios.indexOf(song), 1);
            console.log("Bicicleta Eliminado");
            return this.listaAudios;
        }
        else{
            console.log("No se encontro la Bicicleta");
        }

    }
    public reproducirAudio(Id:number): void{

            let song = this.listaAudios.find(Song => Song.getId() == Id)
            if(song){
                console.log("Reproduciendo", song.getTitulo())
            }
            else{
                console.log("No se encontro la cancion");
            }
    }

}