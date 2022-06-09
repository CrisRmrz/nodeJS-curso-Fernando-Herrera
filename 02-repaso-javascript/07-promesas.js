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

const getEmpleado = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const empleado = empleados.find( e => {
            return e.id === id
        })

        empleado ? resolve( empleado ) : reject('Error, no existe empleado con ese id')

    })

}

getEmpleado( 2 )
    .then( res => {
        console.log( res )
    }).catch( err => {
        console.log('error porvocado')
    })