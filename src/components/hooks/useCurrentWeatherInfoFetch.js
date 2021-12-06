import React, { useEffect, useState } from "react";
import API from "../../API";
import { initialState } from "../Constants";

export function useCurrentWeatherInfoFetch(city, days) {
  const [weatherInfo, setWeatherInfo] = useState(initialState);
  const [weatherInfos, setWeatherInfos] = useState(initialState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    let currentWeather;
    const fetchCurrentWeatherInfo = async () => {
      try {
        setLoading(true);
        setError(false);

        currentWeather = await API.fetch_current_weather_condition(city, days);
        setWeatherInfo({ ...currentWeather });
        setWeatherInfos({ ...currentWeather });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    await fetchCurrentWeatherInfo();
  }, [city]);

  return { weatherInfo, weatherInfos, loading, error };
}
