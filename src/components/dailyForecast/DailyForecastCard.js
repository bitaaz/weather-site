import React, { useState } from "react";
import "./DailyForecastCard.scss";
import { DailyForecastCardOpenedItem } from "../dailyForecastCardOpenedItem/DailyForecastCardOpenedItem";
import { DailyForecastCardClosedItem } from "../dailyForecastCardClosedItem/DailyForecastCardClosedItem";

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
                {!isOpened[id] ? (
                  <div className="container d-flex border-top pt-3">
                    <DailyForecastCardClosedItem day={day} id={id} />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-chevron-down mt-3"
                      viewBox="0 0 16 16"
                      style={{
                        marginBottom: "2%",
                        color: "#0977c4",
                        fontSize: "40px",
                      }}
                      onClick={() => handleArrowClick(id)}
                    >
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                ) : (
                  <div className="container d-flex border-top pt-2">
                    <DailyForecastCardOpenedItem day={day} id={9} />
                    <DailyForecastCardOpenedItem day={day} id={21} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-chevron-up mt-4"
                      viewBox="0 0 16 16"
                      style={{
                        marginBottom: "2%",
                        color: "#0977c4",
                        fontSize: "40px",
                      }}
                      onClick={() => handleArrowClick(id)}
                    >
                      <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
