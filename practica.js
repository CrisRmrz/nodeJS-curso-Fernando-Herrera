/*
const getCharacters = async () => {

    const url = 'https://www.breakingbadapi.com/api/characters?limit=5';
    const req = await fetch( url );
    const res = await req.json();

    return res

}

getCharacters()
    .then( res => {
        console.log( res )
    })
*/

const esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return 'NO es primo';
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return 'NO es primo';
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return 'SI es primo';
}

const argumento = prompt('Digite el valor para determinar si es un numero primo o no:');

console.log( "El numero "+argumento+ ' '+ esPrimo( argumento ) )