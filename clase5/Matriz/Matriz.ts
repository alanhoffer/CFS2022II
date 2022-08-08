class Matriz {


    private matriz: string[][];

    public constructor(matriz: string[][] = []) {
        this.matriz = matriz;
    }

    public getMatriz(): string[][] {
        return this.matriz;
    }

    public getArray(x, y): string {
        return this.matriz[x][y];
    }

}