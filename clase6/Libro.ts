export class Libro {

    private nombre:string;
    private texto:string;
    private autor:string;
    private fecha:string;


    constructor(nombre:string, texto:string, autor:string, fecha:string){
        this.nombre = nombre;
        this.texto = texto;
        this.autor = autor;
        this.fecha = fecha;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setTexto(texto:string){
        this.texto = texto;
    }

    public getTexto():string{
        return this.texto;
    }

    public setAutor(autor:string){
        this.autor = autor;
    }

    public getAutor():string{
        return this.autor;
    }

    public setFecha(fecha:string){
        this.fecha = fecha;
    }

    public getFecha():string{
        return this.fecha;
    }



}