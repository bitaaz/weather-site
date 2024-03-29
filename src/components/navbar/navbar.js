import React from "react";
import Logo from "../../../images/images-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.scss";

export function Navbar() {
  return (
    <nav
      className="navbar navbar-light fixed-top"
      style={{ backgroundColor: "#2C4251" }}
    >
      <div className="container-fluid d-flex">
        <a href="/" className="navbar-brand text-white">
          <div className="d-flex align-items-center">
            <img
              src={Logo}
              width="40"
              height="34"
              alt="logo"
              className="d-inline-block align-text-top"
            />
            <h5 className="mt-1 ms-1">WeatherSite</h5>
          </div>
        </a>
        <div style={{ cursor: "pointer", color: "white" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
