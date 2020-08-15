const yargs = require('yargs')
    .command("crear", "Crea una nueva tarea", {
        desc: {
            demand: true,
            alias: "d",
            type: "string"
        }
    })
    .command("listar", "Muestra todas las tareas creadas", {})
    .command("actualizar", "Actualiza el estado tarea en específico mediante su id", {
        id: {
            demand: true,
            alias: "i",
        },
        complete: {
            default: true,
            alias: "c"
        }
    })
    .command("borrar", "Borrar la base de datos", {})
    .help()
    .argv

module.exports = {
    yargs
}