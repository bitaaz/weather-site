import React from "react";
import Chart from "react-google-charts";

export function DailyMinMaxTemp({ info }) {
  const maxTemps = [
    info.forecast.forecastday[0].day.maxtemp_c,
    info.forecast.forecastday[1].day.maxtemp_c,
    info.forecast.forecastday[2].day.maxtemp_c,
  ];

  const minTemps = [
    info.forecast.forecastday[0].day.mintemp_c,
    info.forecast.forecastday[1].day.mintemp_c,
    info.forecast.forecastday[2].day.mintemp_c,
  ];

  const maxTemp = Math.max.apply(Math, maxTemps);
  const minTemp = Math.min.apply(Math, minTemps);

  const LineData = [
    [
      "x",
      "Minimum Temperature",
      { role: "tooltip", type: "string", p: { html: true } },
      "Maximum Temperature",
      { role: "tooltip", type: "string", p: { html: true } },
    ],
    [0, minTemps[0], `${minTemps[0]}°`, maxTemps[0], `${maxTemps[0]}°`],
    [1, minTemps[1], `${minTemps[1]}°`, maxTemps[1], `${maxTemps[1]}°`],
    [2, minTemps[2], `${minTemps[2]}°`, maxTemps[2], `${maxTemps[2]}°`],
  ];

  const LineChartOptions = {
    legend: { position: "bottom" },
    pointSize: 5,
    hAxis: {
      // baselineColor: "none",
      gridlineColor: "transparent",
      textPosition: "none",
      viewWindow: { min: 0, max: 2 },
    },
    vAxis: {
      baselineColor: "none",
      gridlineColor: "transparent",
      // textPosition: "none",

      viewWindow: { min: minTemp, max: maxTemp },
      title: "Temperature",
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
              <h5 className="fw-bold location-text">Daily Forecast</h5>
            </div>
            <div className="row mt-5">
              <Chart
                width={"98%"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={LineData}
                options={LineChartOptions}
                rootProps={{ "data-testid": "1" }}
                legendToggle
              />
            </div>
            <div
              className="row"
              style={{
                marginTop: "60px",
                textAlign: "center",
              }}
            >
              <div className="col-4 border-end" style={{ textAlign: "center" }}>
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
                  <h6 className="mt-2 rain-chance-text">
                    {" "}
                    {info.forecast.forecastday[0].day.daily_chance_of_rain}%
                  </h6>
                </div>
                <img
                  className="mt-2"
                  src={info.forecast.forecastday[0].day.condition.icon}
                  style={{ width: "50px", height: "50px" }}
                  alt="day-1-img"
                />
                <p className="mt-2 fw-bold">Today</p>
              </div>
              <div
                className="col-4 border-end "
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
                  <h6 className="mt-2 rain-chance-text">
                    {" "}
                    {info.forecast.forecastday[1].day.daily_chance_of_rain}%
                  </h6>
                </div>
                <img
                  className="mt-2"
                  src={info.forecast.forecastday[1].day.condition.icon}
                  style={{ width: "50px", height: "50px" }}
                  alt="day-2-img"
                />
                <p className="mt-2" style={{ fontWeight: 400 }}>
                  Tomorrow
                </p>
              </div>
              <div className="col-4" style={{ textAlign: "center" }}>
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
                  <h6 className="mt-2 rain-chance-text">
                    {" "}
                    {info.forecast.forecastday[2].day.daily_chance_of_rain}%
                  </h6>
                </div>
                <img
                  className="mt-2"
                  src={info.forecast.forecastday[2].day.condition.icon}
                  style={{ width: "50px", height: "50px" }}
                  alt="day-3-img"
                />
                <p className="mt-2" style={{ fontWeight: 400 }}>
                  2 Days Later
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
