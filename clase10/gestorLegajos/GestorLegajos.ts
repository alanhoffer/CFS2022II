import Alumno from './Alumno'

class GestorLegajos {

    private alumnos:Alumno[];

    constructor(alumnos:Alumno[] = []){
        this.alumnos = alumnos;
    }

    obtenerPromedio(nombre?:string){
        if(nombre){

            let alumno = this.alumnos.find(alumno => alumno.getNombre() === nombre);

            if(alumno){
                let promedio:number = 0;    
                alumno.getExamenes().forEach(examen => {
                    promedio += examen.getNota();
                })

                promedio = promedio / alumno.getExamenes().length;
                return promedio;
            }


        }

        else{
            let promedio:number = 0;
            let examenes:number = 0;

            this.alumnos.forEach(alumno => {
                alumno.getExamenes().forEach(examen => {
                    promedio += examen.getNota();
                })
                examenes += alumno.getExamenes().length;
            })

            promedio = promedio / examenes;
            
            return promedio

        }
    }

}