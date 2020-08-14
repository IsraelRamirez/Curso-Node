const { crearArchivo, listarTablas } = require("./multiplicar")
const listar = (base, limite) => {
    for (let i = 0; i < limite; i++) {
        console.log(listarTablas(base + i))
    }
}
const crear = (base, limite) => {
    for (let i = 0; i < limite; i++) {
        crearArchivo(base + i)
            .then(archivo => console.log(`Archivo creado : ${archivo}`))
            .catch(err => console.log(err))
    }
}

module.exports = {
    listar,
    crear
}