const fs = require('fs')
const colors = require('colors');

const crear = (descripcion, todos) => {
    return new Promise((res, rej) => {
        let tmp = todos
        let id = 0;
        if (todos.length > 0)
            id = todos[todos.length - 1].id + 1
        const todo = {
            id,
            descripcion,
            completado: false
        }

        tmp.push(todo)
        res(tmp)
    })

}

const listar = () => {
    return new Promise((res, rej) => {
        fs.readFile("./database/data.json", "utf8", (err, data) => {
            if (err) {
                rej(err.red)
                return
            }
            if (data)
                res(JSON.parse(data))
            else
                res(new Array())
        })
    })
}

const actualizar = (id, completado, todos) => {
    return new Promise((res, rej) => {
        todos.forEach(value => {
            if (value.id === id) {
                value.completado = completado
            }
        })
    })
}

const reescribir = (todos) => {

    return new Promise((res, rej) => {
        let data = JSON.stringify(todos)
        fs.writeFile("./database/data.json", data, (err) => {
            if (err) throw new Error("No se pudo grabar", err.red);
        })
        res("Base de datos actualizada correctamente".green)
    })
}

const borrarBD = () => {
    return new Promise((res, rej) => {
        fs.writeFile("./database/data.json", "", (err) => {
            if (err) throw new Error("No se pudo grabar", err.red);
        })
        res("Base de datos actualizada correctamente".green)
    })
}

module.exports = {
    crear,
    listar,
    actualizar,
    reescribir,
    borrarBD
}