const yargs = require("yargs")
const opt = {
    base: {
        demand: true,
        alias: "b",
        default: 1
    },
    limite: {
        alias: "l",
        default: 1
    }
}

const comando = yargs
    .command("listar", "Imprime en consola la tabla de multiplicar", opt)
    .command("crear", "Guarda la tabla de multiplicar en el archivo", opt)
    .help()
    .argv

module.exports = {
    comando
}