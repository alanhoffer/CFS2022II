// implementar una funcinon que sume todos los elementos de un arreglo
var arreglo = [1, 2, 3, 3];
function sumarArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
console.log(sumarArreglo(arreglo));
