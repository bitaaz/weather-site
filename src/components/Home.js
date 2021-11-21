import React from "react";
import {useHomeFetch} from "./hooks/useHomeFetch";

const Home = () => {
    const {weatherData} = useHomeFetch('London')

    console.log(weatherData)

    return(
        <div>
            <h1>weather data...</h1>
        </div>
    )
}

export default Home