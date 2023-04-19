// FUNCION CONSTRUCTORA
// function Auto(puertas, color, marca, año, ruedas){
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;
//     this.informacion = function (){console.log("este es un "+this.marca+"de color "+this.color);};
// }
// var miprimerauto =new Auto(2, "rojo ", "ferrari ", 1988, 4);

// miprimerauto.informacion();
// // console.log(miprimerauto);
// // console.log(miprimerauto.marca);

// EXPRESION DE CLASE
class Auto {
    constructor(puertas, color, marca, año, ruedas){
        this.puertas = puertas;
            this.color = color;
            this.marca = marca;
            this.año = año;
            this.ruedas = ruedas;   
    }
    informacion (){console.log("este es un "+this.marca+"de color "+this.color);};

}
var misegundoauto = new Auto(4, "azul ", "fiat ", 2013, 4);

// misegundoauto.informacion();
console.log(misegundoauto);
console.log(misegundoauto.marca);

// class Football{
//     constructor(jugador){
//         this.jugador = jugador;
//     }
//     obtenernombre(){
//         console.log(this.jugador);
//     }

// }
// var argentina = new Football("messi");
// var brasil = new Football("pele");
// argentina.obtenernombre();
// brasil.obtenernombre();