const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base) => {
    return new Promise((res, rej) => {

        if (!Number(base)) {
            rej((` No es un numero`).red)
            return
        } else {
            let contenido = ""
            base = parseInt(base)
            for (let i = 1; i <= 10; i++) {
                contenido += `${base} * ${i} = ${base*i} \n`;
            }

            fs.writeFile(`./tabla-${base}.txt`, contenido, "utf8", (err) => {
                if (err) rej(err.red);
                else
                    res((`tabla-${base}.txt`).green)
            })
        }
    })
}

const listarTablas = (base) => {

    if (!Number(base)) {
        return ` No es un numero`.red
    } else {
        let contenido = "\n"
        base = parseInt(base)
        for (let i = 1; i <= 10; i++) {
            contenido += `${base} * ${i} = ${base*i} \n`;
        }
        return contenido.green;
    }
}
module.exports = {
    crearArchivo,
    listarTablas
}