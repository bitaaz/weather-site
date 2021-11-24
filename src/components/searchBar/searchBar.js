import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSearchedCity } from "../../reducers/city";
import { useSearchBarFetch } from "../hooks/useSearchBarFetch";

export function SearchBar() {
  const dispatch = useDispatch();

  const { weatherData } = useSearchBarFetch();

  return (
    <>
      <div className={"search"}>
        <FontAwesomeIcon icon={faSearch} style={{ color: "gray" }} />
        <input
          type="text"
          className="form-control"
          placeholder="Search Location"
          onChange={(e) => {
            dispatch(setSearchedCity(e.currentTarget.value));
          }}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      {weatherData.length !== 0 ? (
        <div className="container results align-items-center justify-content-center">
          <div className="row ">
            <div className="card position-absolute search-results">
              {weatherData.map((item) => (
                <div className="card-body card-item" key={item.id}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
