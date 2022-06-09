//Desestructuracion de objetos
const persona = {
    nombre : 'Cris',
    apellidos : 'Ramirez Quesada',
    edad : 20,
    educacion : 'Universidad terminada',
    getNombre : function() {
        return `El nombre es ${ this.nombre }`
    }
}

console.log( persona.getNombre() );

//Aqui estamos desestructurando al objeto persona
const { edad: nombreDeVariableCambiado, nombre } = persona; //A la edad la estamos renombrando con otro nombre

console.log( nombreDeVariableCambiado, nombre ); 

//Desestructuracion de arreglos

const palabras = ['casa','tijeras','cama','silla'];

const [ , , , cuartaVariable ] = palabras;

console.log( cuartaVariable );