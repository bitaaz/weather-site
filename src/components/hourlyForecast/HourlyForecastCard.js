import React, { useState } from "react";
import "./HourlyForecastCard.scss";
import { HourlyForecastCardItem } from "../hourlyForecastCardItem/HourlyForecastCardItem";

export function HourlyForecastCard({ infos }) {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className="card weather-card d-flex mb-3"
        style={{ borderRadius: "20px" }}
      >
        <div className="card-body">
          <div className="d-flex">
            <h5 className="fw-bold title">Hourly Weather</h5>
            <p
              className="ms-1 mt-1 location-text"
              style={{ fontWeight: "400" }}
            >
              {" "}
              -{" "}
              {infos.location.name +
                ", " +
                infos.location.region +
                ", " +
                infos.location.country}
            </p>
          </div>
          <p className="m-0  location-text" style={{ fontWeight: "400" }}>
            As of {infos.location.localtime.split(" ")[1]}
          </p>
          <div className="mt-4 ">
            {infos.forecast.forecastday.map((item, id) => (
              <div key={id}>
                <h6
                  className="fw-bold pt-2 border-top"
                  style={{ fontSize: "22px" }}
                >
                  {item.date}
                </h6>

                <HourlyForecastCardItem
                  data={
                    id === 0
                      ? item.hour.slice(
                          infos.location.localtime.split(":")[0].split(" ")[1]
                        )
                      : item.hour
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
