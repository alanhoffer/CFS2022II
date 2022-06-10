import * as fs from 'fs'

let texto_votantes:string = fs.readFileSync('votantes.txt', 'utf8')
let texto_colegios:string = fs.readFileSync('colegios.txt', 'utf8')
let arreglo_votantes:string[] = texto_votantes.split('-'); 
let arreglo_colegios:string[] = texto_colegios.split('-'); 


function buscarDondeVoto(votante:string){

    if(arreglo_votantes.find(persona => persona === votante)){

        if(votante.startsWith("p")){
            return arreglo_colegios[0]
        }
        else if(votante.startsWith("m")){
            return arreglo_colegios[1]
        }
        else if(votante.startsWith("l")){
            return arreglo_colegios[2]
        }
    }

    else{
        return "No puedes votar"
    }
}

console.log(buscarDondeVoto("pepe3"))