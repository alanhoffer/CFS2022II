export default class Articulo {

    private id:number;
    private nombre:string;
    private precio:number;

    constructor(id:number, nombre:string, precio:number){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    get Id():number{
        return this.id;
    }

    get Nombre(): string{
        return this.nombre;
    }

    set Nombre(nuevoNombre){
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

    get Precio(): number{
        return this.precio;
    }

    set Precio(nuevoPrecio){
        try{ 
            this.precio = nuevoPrecio;
        }
        catch (e){
            console.log("Error con el nuevo precio", e)
        }
    }
}