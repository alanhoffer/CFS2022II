import Telefono from './telefono';

class SmartPhone implements Telefono{

    private estaPrendido: boolean;

    constructor(){

    }


    
    public apagar(): void{
        this.estaPrendido = false;
    }
    public  prender(): void{
        this.estaPrendido = true;
    }
    public  llamar(numero:number = 1): void{
        console.log("Llamando al numero: ", numero)
    }

    public  sacarFoto(): void{
        console.log("Sacaste una foto.")
    }
}


let xia = new SmartPhone()

console.log(xia.llamar(2))