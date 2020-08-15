const { yargs: comando } = require("./config/yargs")
const { ejecutar } = require('./controller/todoController');

ejecutar(comando)