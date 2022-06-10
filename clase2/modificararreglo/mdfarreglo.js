var arreglo = ["default", "pepe", "jose"];
function insertarElemento(elemento) {
    arreglo.push(elemento);
    console.log("Se agrego ".concat(elemento, " a la lista"));
}
function eliminarElemento(elemento) {
    arreglo = arreglo.filter(function (e) { return e != elemento; });
    console.log("Se elimino ".concat(elemento, " de la lista"));
}
function buscarElemento(elemento) {
    var result = arreglo.find(function (e) { return e === elemento; });
    if (result) {
        console.log("Se encontro ".concat(result));
    }
    else {
        console.log("No se encontro");
    }
}
function modificarElemento(elemento, modificacion) {
    arreglo.splice(arreglo.indexOf(elemento), 1, modificacion);
    console.log(arreglo);
}
modificarElemento("pepe", "ortega");
