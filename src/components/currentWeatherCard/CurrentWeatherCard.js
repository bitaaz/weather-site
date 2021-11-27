import React from "react";
import "./CurrentWeatherCard.scss";

export function CurrentWeatherCard({ info }) {
  return (
    <div className="container height align-items-center justify-content-center d-flex">
      <div
        className="card weather-card d-flex"
        style={{ borderRadius: "20px" }}
      >
        <div className="card-body ps-4 py-4 ">
          <div className="row">
            <div className="col-10">
              <h5 className="fw-bold">
                {info.location.name +
                  ", " +
                  info.location.region +
                  ", " +
                  info.location.country}
              </h5>
              <p className="m-0 time">
                {info.location.localtime.split(" ")[1]}
              </p>
              <h1 className="display-1 fw-bold">{info.current.temp_c}°</h1>
              <h4 className="fw-bold">{info.current.condition.text}</h4>
              <p style={{ fontSize: "20px" }}>
                Feels like: {info.current.feelslike_c}°
              </p>
              <p
                className="mb-0"
                style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px" }}
              >
                Last Updated: {info.current.last_updated}
              </p>
            </div>
            <div className="col mt-5">
              <img
                src={info.current.condition.icon}
                style={{ width: "120px", height: "120px" }}
                alt="weather-condition-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
