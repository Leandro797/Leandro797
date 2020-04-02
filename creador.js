
const [, , nombreDelArchivo, textoDelArchivo] = process.argv;

module.exports = {
    nombreDelArchivo: nombreDelArchivo,
    textoDelArchivo: textoDelArchivo
};

const appendFile = require('./archivosoporte');


