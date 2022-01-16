import React from "react";
import { Navbar } from "./navbar/navbar";
import { useCurrentWeatherInfoFetch } from "./hooks/useCurrentWeatherInfoFetch";
import { useParams } from "react-router-dom";
import { WeatherTabs } from "./tabs/WeatherTabs";

export function WeatherInfo() {
  const params = useParams();
  const { weatherInfo } = useCurrentWeatherInfoFetch(params.city, 1);
  const { weatherInfos } = useCurrentWeatherInfoFetch(params.city, 3);

  // console.log(weatherInfos);

  // weatherInfos.forecast.forecastday[0].hour.map((item) => {
  //   console.log(item);
  // });

  // weatherInfos.forecast.forecastday.map((item) => {
  //   // console.log(item);
  //   // item.hour.map((hours) => {
  //   //   console.log(hours);
  //   // });
  // });

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
