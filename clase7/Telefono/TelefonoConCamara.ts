import Telefono from "./Telefono";

class TelefonoConCamara extends Telefono {


    private fotosSacadas:string[] = [];

    constructor(){
        super();
    }
    

    public sacarFoto(objeto:string){
        this.fotosSacadas.push(objeto)
        console.log("Sacaste una foto");
    }

    public mostrarFotosSacadas():string []{
        return this.fotosSacadas;
    }

}