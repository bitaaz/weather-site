import React from "react";
import Chart from "react-google-charts";

import Logo from "../../../images/logo.png";

export function HourlyMinMaxTemp() {
  const LineData = [
    [
      "x",
      "temp",
      // "cats",
      // { role: "tooltip", type: "string", p: { html: true } },
    ],
    [0, 16.9],
    [1, 17],
    [2, 16.8],
    [3, 16.9],
    [4, 17],
    [5, 17],
  ];

  const LineChartOptions = {
    legend: "none",
    pointSize: 5,
    hAxis: {
      baselineColor: "none",
      gridlineColor: "transparent",
      textPosition: "none",
    },
    vAxis: {
      baselineColor: "none",
      gridlineColor: "transparent",
      textPosition: "none",
      viewWindow: { min: 13.6, max: 17 },
    },
    backgroundColor: "transparent",

    // series: {
    //   1: { curveType: "function" },
    // },
  };
  return (
    <>
      <div className="container align-items-center justify-content-center d-flex mb-5 mt-3">
        <div className="card weather-card" style={{ borderRadius: "20px" }}>
          <div className="card-body">
            <div className="row">
              <h5 className="fw-bold location-text">Hourly Forecast</h5>
            </div>
            <div className="row mt-5">
              <p
                style={{
                  position: "absolute",
                  zIndex: "10",
                  top: "100px",
                  left: "90px",
                }}
              >
                16.9°
              </p>
              <Chart
                style={{
                  position: "absolute",
                  width: "100%",
                  textAlign: "center",
                }}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={LineData}
                options={LineChartOptions}
                rootProps={{ "data-testid": "2" }}
              />
            </div>
            <div
              className="row"
              style={{
                marginTop: "120px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              <div
                className="col-2 border-end "
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill me-1 rain-chance"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2 rain-chance-text"> 0%</h6>
                </div>
                <img
                  className="mt-2"
                  src={Logo}
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mt-2">Now</p>
              </div>
              <div
                className="col-2 border-end "
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill me-1 rain-chance"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2 rain-chance-text"> 0%</h6>
                </div>
                <img
                  className="mt-2"
                  src={Logo}
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mt-2">Now</p>
              </div>
              <div
                className="col-2 border-end "
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill me-1 rain-chance"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2 rain-chance-text"> 0%</h6>
                </div>
                <img
                  className="mt-2"
                  src={Logo}
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mt-2">Now</p>
              </div>
              <div
                className="col-2 border-end "
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill me-1 rain-chance"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2 rain-chance-text"> 0%</h6>
                </div>
                <img
                  className="mt-2"
                  src={Logo}
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mt-2">Now</p>
              </div>
              <div
                className="col-2 border-end "
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill me-1 rain-chance"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2 rain-chance-text"> 0%</h6>
                </div>
                <img
                  className="mt-2"
                  src={Logo}
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mt-2">Now</p>
              </div>
              <div className="col-2 " style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill me-1 rain-chance"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2 rain-chance-text"> 0%</h6>
                </div>
                <img
                  className="mt-2"
                  src={Logo}
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mt-2">Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
