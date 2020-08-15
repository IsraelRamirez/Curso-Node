const axios = require("axios");

const getLatLong = async(city) => {
    const response = await axios({
        "method": "GET",
        "url": "https://api.opencagedata.com/geocode/v1/json",

        "params": {
            "key": "aqui el apikey",
            "q": `${encodeURI( city)}`,
            "abbrv": "1",
            "limit": "1"
        }
    })
    if (response.data.results.length === 0) {
        throw new Error(`No se encontró el lugar especificado: ${city}.`)
    }
    const data = response.data.results[0];
    return {
        direccion: data.formatted,
        lat: data.geometry.lat,
        lng: data.geometry.lng
    }
}

module.exports = {
    getLatLong
}