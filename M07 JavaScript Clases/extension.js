class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    };
saludar(){console.log("hola me llamo "+this.nombre+" y tengo "+this.edad);}
}

class Programador extends Persona{
    constructor (nombre, edad, añosdeexperiencia){
        super(nombre, edad);
        this.añosdeexperiencia = añosdeexperiencia;
    }
    codear(){console.log("Hola me llamo "+this.nombre+", codeo desde hace "+this.añosdeexperiencia+" años.");
}
}

var Martin = new Persona("Martin", 18);
var programador = new Programador("Maria", 32, 4);
Martin.saludar();
programador.codear();
programador.saludar();