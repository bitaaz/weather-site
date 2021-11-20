import {CURRENT_WEATHER_CONDITION} from "./config";

const api_settings = {
    fetch_current_weather_condition : async (city) => {
        const endpoint = `${CURRENT_WEATHER_CONDITION}&q=${city}`
        return await (await fetch(endpoint)).json()
    }
}

export default api_settings