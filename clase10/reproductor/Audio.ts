export class Audio {
    private id:number;
    private titulo:string;
    private duracion:number;
    private artista:string;
    public constructor(Id:number, titulo:string, duracion:number, artista:string) {
        this.id = Id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.artista = artista;
    }
    public setId(id:number):void {
        this.id = id;
    }
    public getId():number {
        return this.id;
    }
    public getTitulo():string {
        return this.titulo;
    }
    public getDuracion():number {
        return this.duracion;
    }
    public getArtista():string {
        return this.artista;
    }
    }