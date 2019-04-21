const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un archivo de texto con una tabla de multiplicar utilizando la base y el limite indicado', opts)
    .help()
    .argv;

module.exports = {
    argv
};