import React from "react";
import { useHomeFetch } from "./hooks/useHomeFetch";
import { Navbar } from "./navbar/navbar";
import { Hero } from "./hero/Hero";

const Home = () => {
  const { weatherData } = useHomeFetch("London");

  console.log(weatherData);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
