//Callback hell es un termino que se refiere a un monton de callbacks llamados dentro de mas callbacks,
//provocando que sea dificil identificar y poder leer bien el codigo

const empleados = [
    {
        id: 1,
        nombre: 'Cris'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {
        id: 3,
        nombre: 'Luis'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( e => {
        return e.id === id
    })

    if( !empleado ){
        callback( 'No existe ese usuario con ese id' )
    }

    callback( null, empleado );

}

const getSalario = ( id, callback ) => {

    const salario = salarios.find( e => {
        return (e.id === id)
    })

    if( salario ){
        return callback( null, salario )
    }else{
        return callback( 'No existe un salario con ese id', null );
    }

}

getEmpleado( 1, ( err, empleado ) => {

    if( err ){
        console.log('Error');
        return console.log( err );
    }

    console.log( empleado )
})

getSalario( 2, ( err, salario ) => {

    if( err ){
        return console.log( err )
    }

    console.log( salario.salario )

})