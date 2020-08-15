const axios = require("axios");

const getWeather = async(lat, lng) => {
    const response = await axios({
        "method": "GET",
        "url": "https://api.openweathermap.org/data/2.5/weather",

        "params": {
            "lat": `${lat}`,
            "lon": `${lng}`,
            "appid": "aqui el apikey",
            "units": "metric",
        }
    })
    return response.data.main.temp
}

module.exports = {
    getWeather
}