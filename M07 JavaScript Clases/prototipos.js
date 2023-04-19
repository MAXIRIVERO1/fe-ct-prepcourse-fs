// Array.prototype.MayoresQueTres = function (){
//     var arreglomodificado = [];
//     for(i = 0; i < this.length; i++){
//         if(this[i] > 3){arreglomodificado.push(false);}
//         else{arreglomodificado.push(this[i]);}
//     }
//     return arreglomodificado;
// };
// var arreglo = [1,2,3,4,5,0];
// var nuevoarreglo = arreglo.MayoresQueTres();
// console.log(nuevoarreglo);

class Latinoamerica {
    constructor (){
        this.paises = [];
    }
}
Latinoamerica.prototype.agregarpais = function (pais){
    this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarpais("mexico");
continente.agregarpais("argentina");
console.log(continente.paises);