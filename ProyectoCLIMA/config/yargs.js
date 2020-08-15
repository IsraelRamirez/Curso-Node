const yargs = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true,
            type: "string"
        }
    })
    .help()
    .argv

module.exports = {
    yargs
}