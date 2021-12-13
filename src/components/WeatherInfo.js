import React from "react";
import { Navbar } from "./navbar/navbar";
import { useCurrentWeatherInfoFetch } from "./hooks/useCurrentWeatherInfoFetch";
import { useParams } from "react-router-dom";
import { WeatherTabs } from "./tabs/WeatherTabs";

export function WeatherInfo() {
  const params = useParams();
  const { weatherInfo } = useCurrentWeatherInfoFetch(params.city, 1);
  const { weatherInfos } = useCurrentWeatherInfoFetch(params.city, 3);

  return (
    <>
      <Navbar />
      <WeatherTabs info={weatherInfo} infos={weatherInfos} />
      {/*<CurrentWeatherCard info={weatherInfo} />*/}
      {/*<TodayForecastCard info={weatherInfos} />*/}
      {/*<TodayWeatherDetailsCard info={weatherInfo} />*/}
      {/*<DailyMinMaxTemp info={weatherInfos} />*/}
    </>
  );
}
