import React from "react";
import { Navbar } from "./navbar/navbar";
import { useCurrentWeatherInfoFetch } from "./hooks/useCurrentWeatherInfoFetch";
import { useParams } from "react-router-dom";
import { CurrentWeatherCard } from "./currentWeatherCard/CurrentWeatherCard";
import { TodayForecastCard } from "./todayForecastCard/TodayForecastCard";
import { TodayWeatherDetailsCard } from "./todayWeatherDetailsCard/TodayWeatherDetailsCard";

export function CurrentWeatherInfo() {
  const params = useParams();
  const { weatherInfo } = useCurrentWeatherInfoFetch(params.city, 1);
  const { weatherInfos } = useCurrentWeatherInfoFetch(params.city, 2);

  // console.log(weatherInfos.forecast.forecastday[1].hour[0]);

  // if (loading) return <div>Loading ...</div>;

  return (
    <>
      <Navbar />
      <CurrentWeatherCard info={weatherInfo} />
      <TodayForecastCard info={weatherInfos} />
      <TodayWeatherDetailsCard info={weatherInfo} />
    </>
  );
}
