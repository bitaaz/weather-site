import React from "react";

export function DailyForecastCardOpenedItem({ day, id }) {
  return (
    <div style={{ width: "50%" }}>
      <p className="fw-bold">
        {day.date.split("-")[2] + "-" + day.date.split("-")[1]}{" "}
        <span className="fw-normal">| {id === 9 ? "Day" : "Night"}</span>
      </p>
      <div>
        <div className="d-flex align-items-center">
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {day.hour[id].temp_c}°
          </p>
          <img
            src={day.hour[id].condition.icon}
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
          <p className="rain_chance mt-2">{day.hour[id].chance_of_rain}%</p>
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
          <p className="wind mt-2">{day.hour[id].wind_kph} km/h</p>
        </div>
        <div className="container d-flex align-items-center justify-content-center">
          <div
            className="card w-100 mb-4 d-flex p-3"
            style={{ borderRadius: "20px" }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="details-title">Humidity</p>
                  <p className="details-value">{day.hour[id].humidity}%</p>
                </div>
                <div className="col">
                  <p className="details-title">UV Index</p>
                  <p className="details-value">{day.hour[id].uv} of 10</p>
                </div>
              </div>
              <div className="row border-top">
                <div className="col mt-3">
                  <p className="details-title">
                    {id === 9 ? "Sunrise" : "Moonrise"}
                  </p>
                  <p className="details-value">
                    {id === 9 ? day.astro.sunrise : day.astro.moonrise}
                  </p>
                </div>
                <div className="col mt-3">
                  <p className="details-title">
                    {id === 9 ? "Sunset" : "Moonset"}
                  </p>
                  <p className="details-value">
                    {id === 9 ? day.astro.sunset : day.astro.moonset}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
