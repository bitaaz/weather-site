const API_URL = "https://api.weatherapi.com/v1/";
// const API_KEY = process.env.REACT_APP_API_KEY
const REACT_APP_API_KEY = "0103250278524e448d580736212011";
const API_KEY = REACT_APP_API_KEY;
const CURRENT_WEATHER_CONDITION = `${API_URL}current.json?key=${API_KEY}`;
const SEARCH_LOCATION = `${API_URL}search.json?key=${API_KEY}`;

export { API_URL, API_KEY, CURRENT_WEATHER_CONDITION, SEARCH_LOCATION };
