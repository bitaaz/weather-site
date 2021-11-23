import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.scss";
import { SearchBar } from "../searchBar/searchBar";

export function Hero() {
  return (
    <div className="container">
      <div className="row height justify-content-center align-items-center">
        <div className="col-md-8">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
