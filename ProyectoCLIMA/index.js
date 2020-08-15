const { yargs: comando } = require('./config/yargs');
const colors = require('colors');
const { getClimaFromCity } = require('./controllers/climaController')

if (comando.direccion) {
    getClimaFromCity(comando.direccion)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
} else
    console.log("Es necesario ingresar una dirección como argumento...".red);