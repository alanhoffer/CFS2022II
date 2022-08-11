export default class Examen {
    
    private materia:string;
    private preguntas = [];
    private nota:number;


    constructor(materia:string, preguntas, nota:number){
        this.materia = materia;
        this.preguntas = preguntas;
        this.nota = nota
    }

    getNota(){
        return this.nota;
    }

}