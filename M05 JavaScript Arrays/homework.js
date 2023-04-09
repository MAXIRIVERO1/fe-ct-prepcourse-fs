/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   // return array.shift ();
   return array [0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop ();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (i=0; i<array.length;i++){
      array[i] = array[i]+1 
   }
   return array
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let cadena =""
   for(i=0; i<palabras.length;i++){
      if(i=== palabras.length-1){
         cadena = cadena + palabras[i]
   }else {
      cadena = cadena + palabras[i] + " "
   }
} return cadena
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
const validator = array.includes(elemento)
console.log(validator); true
if(validator){return true} else{return false}
}
const arr = [1, 2, 3, 4, 5]
let ele = 2
console.log (arrayContiene(arr, ele));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0
   for(let i = 0; i<arrayOfNums.length; i++){
      const element = arrayOfNums[i];
      suma += element
   }
   return suma

}
const arrayOfNums = [1,2,3,4,5]
console.log(agregarNumeros(arrayOfNums));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
let suma = 0
for(let i = 0; i<resultadosTest.length; i++){ const element = resultadosTest[i];
suma += element}
let promedio = (suma/resultadosTest.length)
return promedio
}
const resultadosTest = [1,2,3,4,5]
console.log (promedioResultadosTest(resultadosTest));

function numeroMasGrande(arrayOfnums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
let mayor = 0
for(let i = 0; i<arrayOfnums.length; i++){ if (arrayOfnums[i]>mayor)(mayor = arrayOfnums[i])
}
return mayor
}
const arrayOfnums = [1,2,3,4,5]
console.log(numeroMasGrande(arrayOfnums));  

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (!arguments.length){ return 0;}
   if (arguments.length === 1){ return arguments[0];}
   let multiplicar = 1;
   if (arguments.length > 1)
   {for (let i=0; i < arguments.length; i++)(multiplicar = multiplicar * arguments[i]);}
   return multiplicar 
}
const elements = [1,2,3,4,5]
console.log(multiplicarArgumentos(elements)); 

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
let contador = 0
   for (let i = 0; i< array.length; i++)
{if (array[i] > 18){contador = contador +1}}
return contador
}
const array = [1,2,3,4,15]
console.log(cuentoElementos(array)); 

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {return ("Es fin de semana")}
   else {return ("Es dia laboral")};
}
const numeroDeDia = [1,2,3,4,5,6,7]
console.log(diaDeLaSemana(numeroDeDia)); 

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
if (num.toString()[0] === "9")return true; return false;
}

function todosIguales(Array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let flag = Array[0];
   for (let i = 0; i < Array.length; i++){
      if (Array[i] !== flag) return false; 
   } return true; 
}

function mesesDelAño(arraY) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let newarray = [];
   for (let i = 0; i < arraY.length; i++){
      if (arraY[i] === "Enero" || arraY[i] === "Marzo" || arraY[i] === "Noviembre"){
         newarray.push(arraY[i])
      }
   }
   if (newarray.length === 3) return newarray;
   return "No se encontraron los meses pedidos"

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var multiplosDe6 = [];
   for (let i = 0; i <= 10; i++){
      multiplosDe6.push (i*6);}
      return multiplosDe6;

}

function mayorACien(aRRay) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let enteros = [];
   for (let i = 0; i < aRRay.length; i++){
      if(aRRay[i] > 100){
         enteros.push(aRRay[i]);
      }
   }
   return enteros
}
// let enteros = aRRay.filter((mayor) => mayor > 100);
// return enteros; 

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
let nuevovalor = [];
for (let i = 0; i < 10; i++){
num += 2;
nuevovalor.push(num);
if (num === i){break;}
}
if (nuevovalor.length === 10) return nuevovalor;
return "Se interrumpió la ejecución"
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let NEWARRAY = [];
   for (let i = 0; i < 10; i++){
      if (i === 5)continue; num += 2;
      NEWARRAY.push(num);
   }
   return NEWARRAY;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
