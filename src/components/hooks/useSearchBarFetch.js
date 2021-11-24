import { useEffect, useState } from "react";
import API from "../../API";
import { useSelector } from "react-redux";

// const initialState = {
//   location: {
//     name: "",
//     region: "",
//     country: "",
//     lat: 0,
//     lon: 0,
//     tz_id: "",
//     localtime_epoch: 0,
//     localtime: "",
//   },
//   current: {
//     last_updated_epoch: 0,
//     last_updated: "",
//     temp_c: 0,
//     temp_f: 0,
//     is_day: 0,
//     condition: {
//       text: "",
//       icon: "",
//       code: 0,
//     },
//   },
//   wind_mph: 0,
//   wind_kph: 0,
//   wind_degree: 0,
//   wind_dir: "N",
//   pressure_mb: 0,
//   pressure_in: 0,
//   precip_mm: 0,
//   precip_in: 0,
//   humidity: 0,
//   cloud: 0,
//   feelslike_c: 0,
//   feelslike_f: 0,
//   vis_km: 0,
//   vis_miles: 0,
//   uv: 0,
//   gust_mph: 0,
// };

const initialState = [];

export const useSearchBarFetch = () => {
  const [weatherData, setWeatherData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const city = useSelector((state) => state.city.value);

  useEffect(async () => {
    const fetchData = async () => {
      if (city === "") {
        return;
      }
      try {
        setLoading(true);
        setError(false);

        const fetchedData = await API.fetch_location(city);

        setWeatherData([...fetchedData]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    await fetchData();
  }, [city]);

  return {
    weatherData,
    loading,
    error,
  };
};
