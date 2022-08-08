import Decodificador from './Decodificador';

class Televisor {

    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;
    private decodificador: Decodificador;


    public constructor(decodificador) {
        this.decodificador = decodificador;
    }


    public prenderApagar(){
        this.estaPrendido != this.estaPrendido;
    }


    public subirVolumen(){
        this.volumenActual++;
    }

    public bajarVolumen(){
        this.volumenActual--;
    }

    public subirCanal(){
        this.canalActual++;
    }

    public bajarCanal(){
        this.canalActual--;
    }

    public cambiarCanal(canal){
        this.canalActual = canal;
    }

    public verCanalActual(){
        return this.canalActual;
    }

    public verVolumenActual(){
        return this.volumenActual;
    }
}
