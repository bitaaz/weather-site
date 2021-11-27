import React from "react";
import { Navbar } from "./navbar/navbar";
import { useCurrentWeatherInfoFetch } from "./hooks/useCurrentWeatherInfoFetch";
import { useParams } from "react-router-dom";
import { CurrentWeatherCard } from "./currentWeatherCard/CurrentWeatherCard";

export function CurrentWeatherInfo() {
  const params = useParams();
  const { weatherInfo } = useCurrentWeatherInfoFetch(params.city);

  // if (loading) return <div>Loading ...</div>;

  return (
    <>
      <Navbar />
      <CurrentWeatherCard info={weatherInfo} />
    </>
  );
}
