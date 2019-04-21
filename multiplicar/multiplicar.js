// Requireds
const fs = require('fs');
const colors = require('colors');

// Métodos
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base: ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite: ${limite} no es un número`);
            return;
        }

        let resultado =
            `==============\ntabla del ${base}\n==============\n`.blue;

        for (let i = 1; i <= limite; i++) {
            resultado += `${base} * ${i} = ${base * i}\n`.red;
        }
        resolve(resultado);
    })
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        // Valido que sea un número
        if (!Number(base)) {
            reject(`El valor ingresado: ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite: ${limite} no es un número`);
            return;
        }

        // Creando los datos para el archivo
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        // Creación del archivo 
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
};

// Exporto el método para ser utilizado en otro archivo
module.exports = {
    crearArchivo,
    listarTabla
}