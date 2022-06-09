const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');
const colors = require('colors');
colors.setTheme({   //Tener mis propios colores personalizados
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
    miColor: ['blue','underline'] //Con underline
  });

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( res => {
        console.log( res.miColor )
    })
    .catch( err => console.log( 'A ocurrido el siguiente error: '+ err ) );
