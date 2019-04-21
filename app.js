// destructuracion de distinta manera
const argv = require('./config/yargs').argv;
const colors = require('colors');

// desestructuro e importo al mismo tiempo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`${ tabla }`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// Desestructuro el metodo crearArchivo del objeto multiplicar
// para acceder solo con el nombre al metodo y no tener que escribir multiplicar.crearArchivo
// let { crearArchivo } = multiplicar;

// process.argv recibe los parametros ingresados en la linea de comando
// en este caso node app.js --base=numero 
// por eso tomamos el 3er elemento del arreglo y lo separamos despues del igual
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];