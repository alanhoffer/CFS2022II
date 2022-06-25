import { Alumno } from "./Alumno"
import { Profesor } from "./Profesor"

export class Escuela {

    public nombre: string;
    private alumnos: Alumno[] = []
    private profesores: Profesor[] = []

    constructor(nombre:string){
        this.nombre = nombre
    }


    getAlumnos():Alumno[]{
        return this.alumnos;
    }

    setAlumno(alumno:Alumno){
        this.alumnos.push(alumno)
    }

    delAlumno(name:string){
        let alumno = this.alumnos.find(alumno => alumno.getNombre() == name);
        if(alumno){
            this.alumnos.slice(this.alumnos.indexOf(alumno), 1);
        }
    }

    
    getProfesores():Profesor[]{
        return this.profesores;
    }

    setProfesor(profesor:Profesor){
        this.profesores.push(profesor)
    }

    delProfesor(name:string){
        let alumno = this.profesores.find(profesor => profesor.getNombre() == name);
        if(alumno){
            this.profesores.slice(this.profesores.indexOf(alumno), 1);
        }
    }





}