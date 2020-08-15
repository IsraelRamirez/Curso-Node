const { crear, actualizar, reescribir, listar, borrarBD } = require('../models/Todo')

const imprimirLista = (todos) => {
    console.log("### TODO ###".yellow);
    console.log("#ID #Descripción".yellow);
    todos.forEach((value) => {
        if (!value.completado) {
            console.log(`#${value.id}  ${value.descripcion}`.red);
        }
    })
    console.log("");
    console.log("### Completed ###".green);
    console.log("#ID #Descripción".green);
    todos.forEach((value) => {
        if (value.completado) {
            console.log(`#${value.id}  ${value.descripcion}`.blue);
        }
    })
}

const ejecutar = (comando) => {
    listar()
        .then(todos => {
            switch (comando._[0]) {
                case "crear":
                    crear(comando.d, todos)
                        .then(list => {
                            reescribir(list)
                                .then((response) => console.log(response))
                                .catch((err) => console.log(err))
                        })
                    break
                case "listar":
                    imprimirLista(todos)
                    break
                case "actualizar":
                    actualizar(comando.id, comando.complete, todos)
                        .then(reescribir(todos))
                    break
                case "borrar":
                    borrarBD()
                        .then((response) => console.log(response))
                        .catch((err) => console.log(err))
                    break
                default:
                    console.log(`El comando ${comando._[0]} no existe...`);
                    break
            }
        })
        .catch(err => console.log(err))

}

module.exports = {
    ejecutar
}