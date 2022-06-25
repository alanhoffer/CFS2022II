export class Alumno {
    
    public nombre: string;
    private nota: number;
    private estado: string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getNota():number{
        return this.nota;
    }

    setNota(nota:number){
        this.nota = nota;
    }

    getEstado(){
        return this.estado;
    }

    setEstado(nota:number){
        if(nota >= 7){
            this.estado = "Aprobado";
        }
        else{
            this.estado = "Desaprobado"
        }
    }


}