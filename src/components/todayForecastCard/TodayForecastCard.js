import React from "react";

export function TodayForecastCard({ info }) {
  return (
    <div
      className="container align-items-center justify-content-center d-flex"
      style={{ marginTop: "-70px" }}
    >
      <div className="card weather-card" style={{ borderRadius: "20px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="fw-bold location-text">
                Today's Forecast for{" "}
                {info.location.name +
                  ", " +
                  info.location.region +
                  ", " +
                  info.location.country}
              </h5>
            </div>
            <div className="row mt-3 mb-2">
              <div
                className="col border-end  forecast-col"
                style={{
                  textAlign: "center",
                }}
              >
                <h5 className="location-text">Morning</h5>
                <h2>{info.forecast.forecastday[0].hour[8].temp_c}°</h2>
                <img
                  src={info.forecast.forecastday[0].hour[8].condition.icon}
                  style={{ width: "70px", height: "70px" }}
                  alt="morning-condition-img"
                />
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
                    className="bi bi-droplet-fill me-1"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2">
                    {info.forecast.forecastday[0].hour[8].chance_of_rain}%
                  </h6>
                </div>
              </div>
              <div className="col border-end" style={{ textAlign: "center" }}>
                <h5 className="location-text">Afternoon</h5>
                <h2>{info.forecast.forecastday[0].hour[14].temp_c}°</h2>
                <img
                  src={info.forecast.forecastday[0].hour[14].condition.icon}
                  style={{ width: "70px", height: "70px" }}
                  alt="afternoon-condition-img"
                />
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
                    className="bi bi-droplet-fill me-1"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2">
                    {info.forecast.forecastday[0].hour[14].chance_of_rain}%
                  </h6>
                </div>
              </div>
              <div className="col border-end" style={{ textAlign: "center" }}>
                <h5 className="location-text">Evening</h5>
                <h2>{info.forecast.forecastday[0].hour[20].temp_c}°</h2>
                <img
                  src={info.forecast.forecastday[0].hour[20].condition.icon}
                  style={{ width: "70px", height: "70px" }}
                  alt="evening-condition-img"
                />
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
                    className="bi bi-droplet-fill me-1"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2">
                    {info.forecast.forecastday[0].hour[20].chance_of_rain}%
                  </h6>
                </div>
              </div>
              <div className="col" style={{ textAlign: "center" }}>
                <h5 className="location-text">Overnight</h5>
                <h2>{info.forecast.forecastday[0].hour[2].temp_c}°</h2>
                <img
                  src={info.forecast.forecastday[0].hour[2].condition.icon}
                  style={{ width: "70px", height: "70px" }}
                  alt="overnight-condition-img"
                />
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
                    className="bi bi-droplet-fill me-1"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2">
                    {info.forecast.forecastday[0].hour[2].chance_of_rain}%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
