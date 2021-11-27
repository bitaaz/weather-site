import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CurrentWeatherInfo } from "./components/CurrentWeatherInfo";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<CurrentWeatherInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
