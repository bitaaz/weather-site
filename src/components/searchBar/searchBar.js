import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSearchedCity } from "../../reducers/city";
import { useSearchBarFetch } from "../hooks/useSearchBarFetch";
import { Link } from "react-router-dom";
import { RecentLocationItems } from "../recentLocationItems/RecentLocationItems";

export function SearchBar() {
  const dispatch = useDispatch();

  const [searchedVal, setSearchedVal] = useState("");

  const { weatherData } = useSearchBarFetch();

  let prevSearches = JSON.parse(localStorage.getItem("searchedVal") || "[]");

  const saveSearchData = (data) => {
    if (prevSearches.includes(data)) {
      prevSearches = prevSearches.filter((item) => item !== data);
    }
    prevSearches.reverse().push(data);
    if (prevSearches.length > 3) {
      prevSearches.shift();
    }
    localStorage.setItem("searchedVal", JSON.stringify(prevSearches));
  };

  return (
    <>
      <div className={"search"} style={{ marginTop: "300px" }}>
        <FontAwesomeIcon icon={faSearch} style={{ color: "gray" }} />
        <input
          type="text"
          className="form-control "
          placeholder="Search Location"
          onChange={(e) => {
            dispatch(setSearchedCity(e.currentTarget.value));
            setSearchedVal(e.currentTarget.value);
          }}
        />
        {/*<button className="btn btn-primary">Search</button>*/}
      </div>
      {weatherData.length !== 0 && searchedVal !== "" ? (
        <div className="container results align-items-center justify-content-center">
          <div className="row ">
            <div className="card position-absolute search-results">
              {weatherData.map((item) => (
                <Link
                  to={`/${item.url}`}
                  key={item.id}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => saveSearchData(item.name)}
                >
                  <div className="card-body card-item">{item.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      {prevSearches !== "[]" ? (
        // <div>
        //   {prevSearches.reverse().map((item) => (
        //     <div>{item}</div>
        //   ))}
        // </div>
        <RecentLocationItems recentLocations={prevSearches} />
      ) : (
        <div />
      )}
    </>
  );
}
