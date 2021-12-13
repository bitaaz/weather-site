import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WeatherInfo } from "./components/WeatherInfo";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<WeatherInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
