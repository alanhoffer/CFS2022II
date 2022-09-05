var Matriz = /** @class */ (function () {
    function Matriz(matriz) {
        if (matriz === void 0) { matriz = []; }
        this.matriz = matriz;
    }
    Matriz.prototype.getMatriz = function () {
        return this.matriz;
    };
    Matriz.prototype.getArray = function (x, y) {
        return this.matriz[x][y];
    };
    return Matriz;
}());
