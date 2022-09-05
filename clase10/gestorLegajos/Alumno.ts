import Examen from './Examen'

export default class Alumno {

    private nombre:string;
    private edad:number;
    private examenes: Examen[];

    constructor(nombre:string, edad:number, examenes: Examen[] = []){
        this.nombre = nombre;
        this.edad = edad;
        this.examenes = examenes;
    }

    getNombre(){
        return this.nombre;
    }

    getExamenes(){
        return this.examenes;
    }



}