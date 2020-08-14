const { comando } = require("./config/yargs")
const comandos = require('./multiplicar/comandos');
comando._.forEach((value, index) => {
    if (value === "listar" || value === "crear") {
        if (typeof(comando.base) === "object") {
            if (typeof(comando.limite) === "object") {
                comandos[value](comando.base[index], comando.limite[index])
            } else {
                comandos[value](comando.base[index], comando.limite)
            }
        } else {
            comandos[value](comando.base, comando.limite)
        }
    } else {
        console.log("Comando no válido")
    }
})