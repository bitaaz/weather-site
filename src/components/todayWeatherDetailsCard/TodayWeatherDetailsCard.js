import React from "react";

export function TodayWeatherDetailsCard() {
  return (
    <div className="container mt-3 mb-5 align-items-center d-flex justify-content-center">
      <div className="card weather-card" style={{ borderRadius: "20px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="fw-bold">Weather Today in </h5>
              <h2 className="fw-bold">feels like temp</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <p>Feels Like</p>
            </div>
            <div className="col d-flex">
              <div className="col">
                <p>Sunrise</p>
              </div>
              <div className="col">
                <p>Sunset</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col">
                <p>High/ Low</p>
              </div>
              <div className="col">
                <p>High Temp/ Low Temp</p>
              </div>
            </div>
            <div className="col-6 d-flex">
              <div className="col">
                <p>Wind</p>
              </div>
              <div className="col">
                <p>Speed</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col">
                <p>Humidity</p>
              </div>
              <div className="col">
                <p>Percent</p>
              </div>
            </div>
            <div className="col-6 d-flex">
              <div className="col">
                <p>Dew Point</p>
              </div>
              <div className="col">
                <p>Degree</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col">
                <p>Pressure</p>
              </div>
              <div className="col">
                <p>Value</p>
              </div>
            </div>
            <div className="col-6 d-flex">
              <div className="col">
                <p>UV Index</p>
              </div>
              <div className="col">
                <p>Value</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col">
                <p>Visibility</p>
              </div>
              <div className="col">
                <p>Value</p>
              </div>
            </div>
            <div className="col-6 d-flex">
              <div className="col">
                <p>Moon Phase</p>
              </div>
              <div className="col">
                <p>Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
