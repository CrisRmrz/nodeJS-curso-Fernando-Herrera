const fs = require('fs'); //fs es filesystem

const crearArchivo = async (numero = 0, listar = false, hasta = 10) => {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${numero} x ${i} = ${i * numero}\n`;
        }

        if( listar == true ){
            console.log( salida );
        }
            
        fs.writeFileSync(`./salida/tabla-del-${numero}.txt`, salida); //Aqui creamos el archivo .txt en la carpeta salida

        return `tabla-del-${numero}.txt creado`;

}

module.exports = {
    crearArchivo
}