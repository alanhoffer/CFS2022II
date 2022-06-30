export default class Telefono{
    
    estaPrendido:boolean;
    bateriaActual:number;
    ultimoMensajeEnviado:string;
    ultimaLlamada: string;


    mandarMensaje(mensaje:string){
        this.ultimoMensajeEnviado = mensaje;
        console.log("Mensaje enviado");
    }

    hacerLlamada(persona:string){
        this.ultimaLlamada = persona;
        console.log("Llamando");
    }

    prenderApagar(){
        this.estaPrendido != this.estaPrendido
    }

    mostrarBateria():number{
        return this.bateriaActual;
    }

}