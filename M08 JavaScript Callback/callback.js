// var devuelvousuario = function (){
// return "camilo"
// };
// var devuelvosaludo = function(){
//     return "hola"
// };

// // LA SIGUIENTE FUNCION RECIBIRA 2 CALLBACKS POR PARAMETRO "CB1", "CB2"

// var saludar = function (cb1, cb2){
// return cb1()+" "+cb2();
// };
// var resultado = saludar(devuelvosaludo, devuelvousuario);
// console.log (resultado);

var devuelvofrase = function (comida){
    return "hoy quiero comer: "+ comida;
};
var hablar = function (cb, comida){
return cb(comida);
};
var frasefinal = hablar(devuelvofrase, "pizza");
console.log(frasefinal);