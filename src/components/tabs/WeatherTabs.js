import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./WeatherTabs.scss";
import { CurrentWeatherCard } from "../currentWeatherCard/CurrentWeatherCard";
import { TodayForecastCard } from "../todayForecastCard/TodayForecastCard";
import { TodayWeatherDetailsCard } from "../todayWeatherDetailsCard/TodayWeatherDetailsCard";
import { DailyMinMaxTemp } from "../dailyMinMaxTemp/DailyMinMaxTemp";
import { HourlyForecastCard } from "../hourlyForecast/HourlyForecastCard";

export function WeatherTabs({ info, infos }) {
  return (
    <div className="container-fluid" style={{ marginTop: "60px" }}>
      <div className="row">
        <Tabs
          className="mb-3 justify-content-center d-flex myClass"
          defaultActiveKey="Today"
          style={{
            backgroundColor: "#1c2b34",
            borderColor: "#1c2b34",
          }}
        >
          <Tab title="Today" eventKey="Today">
            <CurrentWeatherCard info={info} />
            <TodayForecastCard info={infos} />
            <TodayWeatherDetailsCard info={info} />
            <DailyMinMaxTemp info={infos} />
          </Tab>
          <Tab title="Hourly" eventKey="Hourly">
            <HourlyForecastCard infos={infos} />
          </Tab>
          <Tab title="3 Day" eventKey="3 Day">
            {/*<h1>Contact</h1>*/}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
