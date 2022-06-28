import {Libro} from "./Libro"



export class GestorLibros{

    private lista_libros: Libro[];


    public constructor(lista?:Libro[]){
        if(lista){
            this.lista_libros = lista;
        }
    }

    public getLibro(nombre:string){
        let libro = this.lista_libros.find(Libro => Libro.getNombre() == nombre);
        if(libro){ 
            console.log("Hemos encontrado el libro: ",libro);
            return libro
        }
        else{
            console.log("No hemos encontrado el libro.")
        }
    }

    public agregarLibro(nombre:string, texto:string, autor:string, fecha:string): Libro[] {
        let libro = new Libro(nombre, texto, autor, fecha);
        this.lista_libros.push(libro);
        console.log("Libro Agregado: ", libro);
        return this.lista_libros;
    }

    public eliminarLibro(nombre: string) {
        let libro = this.lista_libros.find(Libro => Libro.getNombre() == nombre)
        
        if(libro){
            this.lista_libros.splice(this.lista_libros.indexOf(libro), 1);
            console.log("Libro Eliminado");
            return this.lista_libros;
        }
        else{
            console.log("No se encontro el libro");
        }
    }

    public modificarLibro(nombre:string, texto?:string, fecha?:string, autor?:string){
        let libro = this.lista_libros.find(Libro => Libro.getNombre() == nombre)

        if(libro){
            console.log("Hemos encontrado el libro: ", nombre)

            if(texto && texto.length > 0){
                libro.setTexto(texto);
            }
            if(fecha && fecha.length > 0){
                libro.setFecha(fecha);
            }
            if(autor && autor.length > 0){
                libro.setAutor(autor);
            }

            console.log("Libro modificado: ", libro);
        }
        else{
            console.log("No hemos encontrado el libro")
        }

    }

}