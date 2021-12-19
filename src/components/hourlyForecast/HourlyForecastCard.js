import React from "react";
import "./HourlyForecastCard.scss";

export function HourlyForecastCard({ infos }) {
  // console.log(infos);
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className="card weather-card d-flex"
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
          <div className="mt-4 border-top">
            {infos.forecast.forecastday.map((item) => (
              <>
                <h6 className="fw-bold" style={{ fontSize: "22px" }}>
                  {item.date}
                </h6>
                {item.hour.map((hour) => (
                  <p>{hour.time.split(":")[0].split(" ")[1]}</p>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
