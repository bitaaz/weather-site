import React from "react";
import "./CurrentWeatherCard.scss";

export function CurrentWeatherCard({ info }) {
  return (
    <div
      className="container align-items-center justify-content-center d-flex"
      style={{ marginTop: "90px" }}
    >
      <div
        className="card weather-card d-flex"
        style={{
          borderRadius: "20px",
        }}
      >
        <div className="card-body ps-4 py-4 ">
          <div className="row">
            <div className="col-10 col-xl-9 info-col">
              <h5 className="fw-bold location-text">
                {info.location.name +
                  ", " +
                  info.location.region +
                  ", " +
                  info.location.country}
              </h5>
              <p className="m-0 time">
                {info.location.localtime.split(" ")[1]}
              </p>
              <h1 className="display-1 fw-bold temp-text">
                {info.current.temp_c}°
              </h1>
              <h4 className="fw-bold condition-text ">
                {info.current.condition.text}
              </h4>
              <p className="feels-like">
                Feels like: {info.current.feelslike_c}°
              </p>
              <p
                className="mb-0 last-update"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                Last Updated: {info.current.last_updated}
              </p>
            </div>
            <div className="col mt-5">
              <img
                className="condition-img"
                src={info.current.condition.icon.replace("64x64", "128x128")}
                alt="weather-condition-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
