class Matriz {


    public matriz: string[][];

    public constructor(matriz: string[][] = []) {
        this.matriz = matriz;
    }

    getMatriz(): string[][] {
        return this.matriz;
    }

    getArray(x, y): string {
        return this.matriz[x][y];
    }

}