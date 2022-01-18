import React, { useState } from "react";
import "./DailyForecastCard.scss";

export function DailyForecastCard({ infos }) {
  const [boxOpen, setBoxOpen] = useState({
    isOpened: {},
  });

  const handleArrowClick = (index) => {
    boxOpen.isOpened[index]
      ? setBoxOpen((prevState) => {
          return {
            isOpened: { ...prevState.isOpened, [index]: false },
          };
        })
      : setBoxOpen((prevState) => {
          return {
            isOpened: { ...prevState.isOpened, [index]: true },
          };
        });
  };

  const { isOpened } = boxOpen;

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className="card weather-card d-flex mb-3"
        style={{ borderRadius: "20px" }}
      >
        <div className="card-body">
          <div className="d-flex">
            <h5 className="fw-bold title">3-Day Weather</h5>
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
          <div className="mt-4">
            {infos.forecast.forecastday.map((day, id) => (
              <div key={id}>
                {/*<div className="d-flex align-items-center border-top pt-3">*/}
                {/*  <p className="me-5 time">*/}
                {/*    {id === 0*/}
                {/*      ? "Today"*/}
                {/*      : day.date.split("-")[2] + "-" + day.date.split("-")[1]}*/}
                {/*  </p>*/}
                {/*  <p className="fw-bold fs-5 temp">*/}
                {/*    {day.day.maxtemp_c}°*/}
                {/*    <span*/}
                {/*      className="fw-normal align-items-center"*/}
                {/*      style={{ fontSize: "15px" }}*/}
                {/*    >*/}
                {/*      {" "}*/}
                {/*      / {day.day.mintemp_c}°*/}
                {/*    </span>*/}
                {/*  </p>*/}
                {/*  <img*/}
                {/*    src={day.day.condition.icon}*/}
                {/*    alt="weather-icon"*/}
                {/*    className="condition-icon"*/}
                {/*  />*/}
                {/*  <p className="condition-text">{day.day.condition.text}</p>*/}
                {/*  <svg*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    fill="currentColor"*/}
                {/*    className="bi bi-droplet-fill me-1 rain-chance"*/}
                {/*    viewBox="0 0 16 16"*/}
                {/*    style={{ color: "#0977c4", marginBottom: "2%" }}*/}
                {/*  >*/}
                {/*    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />*/}
                {/*  </svg>*/}
                {/*  <p className="rain_chance">{day.day.daily_chance_of_rain}%</p>*/}

                {/*  <svg*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    width="20"*/}
                {/*    height="20"*/}
                {/*    fill="currentColor"*/}
                {/*    className="bi bi-wind mt-1 me-1"*/}
                {/*    viewBox="0 0 16 16"*/}
                {/*    style={{ marginBottom: "2%", color: "#0977c4" }}*/}
                {/*  >*/}
                {/*    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />*/}
                {/*  </svg>*/}
                {/*  <p className="wind">{day.day.maxwind_kph} km/h</p>*/}
                {/*  {!isOpened[id] ? (*/}
                {/*    <svg*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*      width="20"*/}
                {/*      height="20"*/}
                {/*      fill="currentColor"*/}
                {/*      className="bi bi-chevron-down"*/}
                {/*      viewBox="0 0 16 16"*/}
                {/*      style={{*/}
                {/*        marginBottom: "2%",*/}
                {/*        color: "#0977c4",*/}
                {/*        fontSize: "40px",*/}
                {/*      }}*/}
                {/*      onClick={() => handleArrowClick(id)}*/}
                {/*    >*/}
                {/*      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />*/}
                {/*    </svg>*/}
                {/*  ) : (*/}
                {/*    <svg*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*      width="20"*/}
                {/*      height="20"*/}
                {/*      fill="currentColor"*/}
                {/*      className="bi bi-chevron-up"*/}
                {/*      viewBox="0 0 16 16"*/}
                {/*      style={{*/}
                {/*        marginBottom: "2%",*/}
                {/*        color: "#0977c4",*/}
                {/*        fontSize: "40px",*/}
                {/*      }}*/}
                {/*      onClick={() => handleArrowClick(id)}*/}
                {/*    >*/}
                {/*      <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />*/}
                {/*    </svg>*/}
                {/*  )}*/}
                {/*</div>*/}
                <div className="container d-flex border-top pt-2">
                  <div style={{ width: "50%" }}>
                    <p className="fw-bold">
                      {day.date.split("-")[2] + "-" + day.date.split("-")[1]}{" "}
                      <span className="fw-normal">| Day</span>
                    </p>
                    <div className="d-flex align-items-center">
                      <p
                        style={{
                          fontSize: "40px",
                          fontWeight: "bold",
                        }}
                      >
                        {day.hour[9].temp_c}°
                      </p>
                      <img
                        src={day.hour[9].condition.icon}
                        className="condition-icon-day-night mb-3 me-5"
                        alt="weather-icon"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-droplet-fill me-1 rain-chance"
                        viewBox="0 0 16 16"
                        style={{ color: "#0977c4", marginBottom: "2%" }}
                      >
                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                      </svg>
                      <p className="rain_chance mt-2">
                        {day.hour[9].chance_of_rain}%
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-wind mt-1 me-1"
                        viewBox="0 0 16 16"
                        style={{ marginBottom: "2%", color: "#0977c4" }}
                      >
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      <p className="wind mt-2">{day.hour[9].wind_kph} km/h</p>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <p className="fw-bold">
                      {day.date.split("-")[2] + "-" + day.date.split("-")[1]}{" "}
                      <span className="fw-normal">| Night</span>
                    </p>
                    <div className="d-flex align-items-center me-2">
                      <p
                        style={{
                          fontSize: "40px",
                          fontWeight: "bold",
                          overflow: "hidden",
                        }}
                      >
                        {day.hour[21].temp_c}°
                      </p>
                      <img
                        src={day.hour[21].condition.icon}
                        className="condition-icon-day-night mb-3 me-5"
                        alt="weather-icon"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-droplet-fill me-1 rain-chance"
                        viewBox="0 0 16 16"
                        style={{ color: "#0977c4", marginBottom: "2%" }}
                      >
                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                      </svg>
                      <p className="rain_chance mt-2">
                        {day.hour[21].chance_of_rain}%
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-wind mt-1 me-1"
                        viewBox="0 0 16 16"
                        style={{ marginBottom: "2%", color: "#0977c4" }}
                      >
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      <p className="wind mt-2">{day.hour[21].wind_kph} km/h</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
