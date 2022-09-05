export default class Articulo {

    private id:number;
    private nombre:string;
    private precio:number;

    constructor(id:number, nombre:string, precio:number){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    getId(){
        return this.id;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nuevoNombre){
        try{ 
            if(nuevoNombre.length > 4){
                this.nombre = nuevoNombre;
            }
            else{
                throw new Error("Demaciado corto pa")
            }
        }
        catch (e){
            console.log("Error con el nuevo nombre", e)
        }
    }

    getPrecio(){
        return this.precio;
    }

    setPrecio(nuevoPrecio){
        try{ 
            this.precio = nuevoPrecio;
        }
        catch (e){
            console.log("Error con el nuevo precio", e)
        }
    }
}