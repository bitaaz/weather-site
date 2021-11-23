import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function Hero() {
  const [city, setCity] = useState("");

  console.log(city);

  return (
    <div className="container">
      <div className="row height justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              className="form-control"
              placeholder="Search Location"
              onChange={(e) => setCity(e.currentTarget.value)}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
