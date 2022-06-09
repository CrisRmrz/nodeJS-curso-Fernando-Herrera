

const argv = require('yargs')
                    .option('b', {
                        alias: 'numero',
                        type: 'number',
                        demandOption: true, //Que sea obligatorio poner el numero
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Es la opcion para indicar si quiero que se muestre la tabla por consola o no'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Es la opcion para indicar hasta que numero quiero la tabla de multiplicar'
                    })
                    .check( ( argv, options ) => {
                        
                        if( isNaN( argv.b ) ){
                            throw 'La base tiene que ser un numero'
                        }

                        if( isNaN( argv.h ) ){
                            throw 'El hasta o el limite tiene que ser un numero'
                        }

                        return true;

                    })
                    .argv;

module.exports = argv;