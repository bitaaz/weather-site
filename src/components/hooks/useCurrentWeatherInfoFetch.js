import React, { useEffect, useState } from "react";
import API from "../../API";

const initialState = {
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  current: {
    last_updated_epoch: 0,
    last_updated: "",
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: {
      text: "",
      icon: "",
      code: 0,
    },
  },
  wind_mph: 0,
  wind_kph: 0,
  wind_degree: 0,
  wind_dir: "N",
  pressure_mb: 0,
  pressure_in: 0,
  precip_mm: 0,
  precip_in: 0,
  humidity: 0,
  cloud: 0,
  feelslike_c: 0,
  feelslike_f: 0,
  vis_km: 0,
  vis_miles: 0,
  uv: 0,
  gust_mph: 0,
};

export function useCurrentWeatherInfoFetch(city) {
  const [weatherInfo, setWeatherInfo] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    let currentWeather;
    const fetchCurrentWeatherInfo = async () => {
      try {
        setLoading(true);
        setError(false);

        currentWeather = await API.fetch_current_weather_condition(city);
        setWeatherInfo({ ...currentWeather });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    await fetchCurrentWeatherInfo();
  }, [city]);

  return { weatherInfo, loading, error };
}
