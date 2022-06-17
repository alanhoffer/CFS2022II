export class Arma {

    nombre: string;
    daño: number;
    balas_actual: number;
    balas_max: number;

    constructor(nombre: string, daño: number, balas_max: number) {
        this.nombre = nombre;
        this.daño = daño;
        this.balas_max = balas_max;
    }

    disparar(): void {
        if(this.balas_actual > 0){
            this.balas_actual--;
        }
        else{
            console.log('No tienes balas');
        }
    }

    recargar(): void {
        this.balas_actual = this.balas_max;
    }   

}

let ak47 = new Arma('AK47', 100, 3);
let m4 = new Arma('M4', 200, 6);

ak47.recargar();
ak47.disparar();
ak47.disparar();
ak47.disparar();
ak47.disparar();
ak47.disparar();