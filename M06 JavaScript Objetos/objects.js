// var deportes = {sinbalon: ["football", "basketball", "rugby"],
// sinbalon:["boxeo", "surf", "trekking"],};

var persona = {nombre: "Lucas", edad: 21, estudios: {esprogramador: true}};
// console.log(persona.nombre)

// cambiar un valor en una propiedad
// persona.nombre = "Maxi"
// console.log(persona.nombre)

persona.edad = 29
// console.log(persona.edad)

var autos = {}
autos.marcas = ["ford", "ferrari", "chevrolet"]

// para borrar los objetos
// delete autos.marcas;

console.log(autos.marcas)

// con funciones:
var misfunciones = {saludar: function() {console.log("hola");},};
misfunciones.saludar();

var atuendo = {manos: ["guantes", "anillos"], pies: ["zapatos", "soquetes"]};
// console.log (atuendo.manos)

// PARA AGREGAR CON CORCHETES "DOT NOTATION"
atuendo["piernas"] = ["bermudas", "pantalon"];
console.log(atuendo.piernas)

var comidas = {};
var functionparaverdiferenciaDOTBRACKET = function (propuno, propdos) {
    comidas.propuno = ["frutas", "vegetales"]
    // CON BRACKET NOTATION SACAMOS LOS "" Y EL NOMBRE SE MODIFICA POR PARAMETRO, OSEA A propdos 
    comidas[propdos] = ["hamburguesa", "papas fritas"]
};
functionparaverdiferenciaDOTBRACKET ("saludable", "no saludable");
console.log (comidas);

// HASOWNPROPERTY
var libro = {autor:"borges", genero: "policial", año: 1990};
var tienepropiedad = libro.hasOwnProperty("año");
// console.log (tienepropiedad);

// KEYS
var todaslaspropiedades = Object.keys(libro);
console.log (todaslaspropiedades);

// FOR IN
var mundo = {continentes: 7, paises: 195, oceanos: 5};
for (var prop in mundo){
    console.log("esta es la propiedad: " + prop)
    console.log ("este es el valor: " + mundo[prop])
};

// THIS indica sobre que objeto es el contexto y devuelve la propidad
 var mascota = {animal: "perro", raza: "obejero aleman", amistoso: true, dueño: "Maria Lopez", info : function(){console.log("mi perros es un "+this.raza);}};
mascota.info();
