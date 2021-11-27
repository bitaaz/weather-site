import { useEffect, useState } from "react";
import API from "../../API";
import { useSelector } from "react-redux";

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
