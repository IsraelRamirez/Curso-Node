const { getLatLong } = require('../config/lugar')
const { getWeather } = require('../config/owmAPI')


const getClimaFromCity = async(city) => {

    try {
        const direccion = await getLatLong(city)
        const temp = await getWeather(direccion.lat, direccion.lng)
        return `Dirección Encontrada: ${direccion.direccion.green} - Temperatura actual: ${String(temp).green} °C`
    } catch (error) {
        return `No se pudo encontrar el clima de ${city}`.red
    }

}

module.exports = {
    getClimaFromCity
}