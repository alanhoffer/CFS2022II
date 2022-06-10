// implementar una funcinon que sume todos los elementos de un arreglo
let arreglo:number[] = [1,2,3,3] 


function sumarArreglo(arreglo:number[]):number{
    let suma:number = 0;

    for(let i:number = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

console.log(sumarArreglo(arreglo));