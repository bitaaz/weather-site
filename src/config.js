const API_URL = "https://api.weatherapi.com/v1/"
const API_KEY = process.env.WEATHER_SITE_API_KEY

const CURRENT_WEATHER_CONDITION = `${API_URL}current.json?key=${API_KEY}`


export {
    API_URL,
    API_KEY,
    CURRENT_WEATHER_CONDITION
}