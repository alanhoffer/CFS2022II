import { Alumno } from "./Alumno";

export class Profesor {

    public nombre: string;
    private alumnos: Alumno[];

    constructor(nombre:string, alumnos: Alumno[]){
        this.nombre = nombre;
        this.alumnos = alumnos;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    getAlumnos(){
        return this.alumnos;
    }

    setAlumno(alumno:Alumno){
        this.alumnos.push(alumno);
    }

    delAlumno(name:string){
        let alumno = this.alumnos.find(alumno => alumno.getNombre() == name)
        if(alumno){
            this.alumnos.slice(this.alumnos.indexOf(alumno), 1)
        }
    }




}