import {GestorLegajos} from './GestorLegajos'
import Alumno from './Alumno'


let Alumnos:Alumno[] = [];

Alumnos.push(new Alumno("alan",15,[1,2,3]))

let Gestor = new GestorLegajos(Alumnos)


Gestor.obtenerPromedio("alan")