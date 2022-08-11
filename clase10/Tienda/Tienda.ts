import Articulo from "./Articulo";


export default class Tienda {

    private listaArticulos: Articulo[];
    private listaVendidos: Articulo[];

    constructor(listaArticulos:Articulo[] = []){
        this.listaArticulos = listaArticulos;
    }


    agregarArticulos(id:number, nombre:string, precio:number){
        try {
            let articulo = new Articulo(id, nombre, precio);
            if(articulo){
                this.listaArticulos.push(articulo)
            }
            else{
                throw new Error("Error al crear el articulo nidea pq")
            }
        }
        catch{
            console.log("Error al crear el articulo nidea pq")
        }
    }

    venderArticulo(id:number){

            let articulo = this.listaArticulos.find(art => art.Id == id)
            if(articulo){

                this.listaArticulos.splice(this.listaArticulos.indexOf(articulo), 1);

                this.listaVendidos.push(articulo);

                console.log("Articulo vendido", articulo.Nombre);
            }
            else{
                console.log("No se encontro el Articulo");
            }
    
    }

    importarArticulos(listaArticulosImp:Articulo[]){
        listaArticulosImp.forEach(articulo => this.listaArticulos.push(articulo))
    }

    exportarVendidos(): Articulo[]{
        return this.listaVendidos;
    }

}