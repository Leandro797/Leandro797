const creador = require('./creador')

const fs = require('fs');

fs.appendFile(`${creador.nombreDelArchivo}.txt`, creador.textoDelArchivo,(error) =>{
    if(error){
        throw error;
    }
    console.log('Se creo el archivo')
})

module.exports = fs.appendFile;
