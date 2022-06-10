let arreglo: string[] = ["default","pepe","jose"];


function insertarElemento(elemento:string){
    arreglo.push(elemento);

    console.log(`Se agrego ${elemento} a la lista ` + `resultado: ${arreglo}`)
}

function eliminarElemento(elemento:string){
    arreglo = arreglo.filter(e => e != elemento)
    
    console.log(`Se elimino ${elemento} de la lista ` + `resultado: ${arreglo}`)
}

function buscarElemento(elemento:string){

    let result = arreglo.find(e => e === elemento)

    if(result){
        console.log(`Se encontro ${result}`)
    }
    else{
        console.log(`No se encontro`)
    }
    
}

function modificarElemento(elemento:string, modificacion:string){
    
    arreglo.splice(arreglo.indexOf(elemento), 1, modificacion)

    console.log(`Se modifico ${elemento} por ${modificacion} ` + `resultado: ${arreglo}`)
}
