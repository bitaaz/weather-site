import React from "react";
import "./TodayForecastCard.scss";

export function TodayForecastCard({ info }) {
  const currentTime = info.location.localtime.split(":")[0];
  const currentHour = currentTime.split(" ")[1];

  return (
    <div
      className="container align-items-center justify-content-center d-flex"
      style={{ marginTop: "20px" }}
    >
      <div className="card weather-card" style={{ borderRadius: "20px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col align-items-center d-flex justify-content-center">
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
                className="col-sm-3 col-6 border-end"
                style={{
                  textAlign: "center",
                }}
              >
                <h5
                  className="location-text"
                  style={{
                    color:
                      currentHour >= 6 && currentHour < 12 ? "black" : "gray",
                    fontWeight:
                      currentHour >= 6 && currentHour < 12 ? "bold" : "normal",
                  }}
                >
                  Morning
                </h5>
                <h2
                  className="today-temp"
                  style={{
                    color:
                      currentHour >= 6 && currentHour < 12 ? "black" : "gray",
                    fontWeight:
                      currentHour >= 6 && currentHour < 12 ? "bold" : "normal",
                  }}
                >
                  {info.forecast.forecastday[0].hour[8].temp_c}°
                </h2>
                <img
                  src={info.forecast.forecastday[0].hour[8].condition.icon}
                  className="today-condition-icon"
                  alt="morning-condition-img"
                />
                {currentHour >= 6 && currentHour < 12 ? (
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
                    <h6
                      className="mt-2 rain-chance-text"
                      style={{
                        fontWeight:
                          currentHour >= 6 && currentHour < 12
                            ? "bold"
                            : "normal",
                      }}
                    >
                      {info.forecast.forecastday[0].hour[8].chance_of_rain}%
                    </h6>
                  </div>
                ) : (
                  <p className="mt-2">--</p>
                )}
              </div>
              <div
                className="col-sm-3 col-6 afternoon"
                style={{ textAlign: "center" }}
              >
                <h5
                  className="location-text"
                  style={{
                    color:
                      currentHour >= 6 && currentHour < 18 ? "black" : "gray",
                    fontWeight:
                      currentHour >= 12 && currentHour < 18 ? "bold" : "normal",
                  }}
                >
                  Afternoon
                </h5>
                <h2
                  className="today-temp"
                  style={{
                    color:
                      currentHour >= 6 && currentHour < 18 ? "black" : "gray",
                    fontWeight:
                      currentHour >= 12 && currentHour < 18 ? "bold" : "normal",
                  }}
                >
                  {info.forecast.forecastday[0].hour[14].temp_c}°
                </h2>
                <img
                  src={info.forecast.forecastday[0].hour[14].condition.icon}
                  className="today-condition-icon"
                  alt="afternoon-condition-img"
                />
                {currentHour >= 6 && currentHour < 18 ? (
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
                    <h6
                      className="mt-2 rain-chance-text"
                      style={{
                        fontWeight:
                          currentHour >= 12 && currentHour < 18
                            ? "bold"
                            : "normal",
                      }}
                    >
                      {info.forecast.forecastday[0].hour[14].chance_of_rain}%
                    </h6>
                  </div>
                ) : (
                  <p className="mt-2">--</p>
                )}
              </div>
              <div
                className="col-sm-3 col-6  border-end mt-3 mt-sm-0"
                style={{ textAlign: "center" }}
              >
                <h5
                  className="location-text"
                  style={{
                    color: currentHour >= 6 ? "black" : "gray",
                    fontWeight: currentHour >= 18 ? "bold" : "normal",
                  }}
                >
                  Evening
                </h5>
                <h2
                  className="today-temp"
                  style={{
                    color: currentHour >= 6 ? "black" : "gray",
                    fontWeight: currentHour >= 18 ? "bold" : "normal",
                  }}
                >
                  {info.forecast.forecastday[0].hour[20].temp_c}°
                </h2>
                <img
                  src={info.forecast.forecastday[0].hour[20].condition.icon}
                  className="today-condition-icon"
                  alt="evening-condition-img"
                />
                {currentHour >= 6 ? (
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
                    <h6
                      className="mt-2 rain-chance-text"
                      style={{
                        fontWeight: currentHour >= 18 ? "bold" : "normal",
                      }}
                    >
                      {info.forecast.forecastday[0].hour[20].chance_of_rain}%
                    </h6>
                  </div>
                ) : (
                  <p className="mt-2">--</p>
                )}
              </div>
              <div
                className="col-sm-3 col-6 mt-3 mt-sm-0"
                style={{ textAlign: "center" }}
              >
                <h5
                  className="location-text"
                  style={{
                    fontWeight:
                      currentHour >= 0 && currentHour < 6 ? "bold" : "normal",
                  }}
                >
                  Overnight
                </h5>
                <h2
                  className="today-temp"
                  style={{
                    fontWeight:
                      currentHour >= 0 && currentHour < 6 ? "bold" : "normal",
                  }}
                >
                  {currentHour >= 6
                    ? info.forecast.forecastday[1].hour[2].temp_c
                    : info.forecast.forecastday[0].hour[2].temp_c}
                  °
                </h2>
                <img
                  src={
                    currentHour >= 6
                      ? info.forecast.forecastday[1].hour[2].condition.icon
                      : info.forecast.forecastday[0].hour[2].condition.icon
                  }
                  className="today-condition-icon"
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
                    // width="16"
                    // height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill me-1 rain-chance"
                    viewBox="0 0 16 16"
                    style={{ color: "#abe7f1" }}
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                  <h6 className="mt-2 rain-chance-text">
                    {currentHour >= 6
                      ? info.forecast.forecastday[1].hour[2].chance_of_rain
                      : info.forecast.forecastday[0].hour[2].chance_of_rain}
                    %
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
