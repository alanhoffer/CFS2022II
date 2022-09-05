export default class Decodificador {
    
    private canales:number[];
    
    constructor(canales:number[]){
        this.canales = canales;
    }


    public activarCanales(){
        console.log("Canales activados")
        this.canales.forEach(canal  => console.log("canal: " + canal))
    }
}