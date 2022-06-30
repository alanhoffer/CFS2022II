import Telefono from "./Telefono";

class TelefonoConCamara extends Telefono {


    fotosSacadas:string[] = [];
    

    sacarFoto(objeto:string){
        this.fotosSacadas.push(objeto)
        console.log("Sacaste una foto");
    }

    mostrarFotosSacadas():string []{
        return this.fotosSacadas;
    }
    
}