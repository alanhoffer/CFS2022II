export default class Telefono{
    
    private estaPrendido:boolean;
    private bateriaActual:number;
    private ultimoMensajeEnviado:string;
    private ultimaLlamada: string;


    public mandarMensaje(mensaje:string){
        this.ultimoMensajeEnviado = mensaje;
        console.log("Mensaje enviado");
    }

    public hacerLlamada(persona:string){
        this.ultimaLlamada = persona;
        console.log("Llamando");
    }

    public prenderApagar(){
        this.estaPrendido != this.estaPrendido
    }

    public mostrarBateria():number{
        return this.bateriaActual;
    }

}