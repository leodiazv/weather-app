import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState({});

  const success = async (pos) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=daily&appid=13d78c602470e61a84bec017bf38b026`
      )
      .then((res) => setCurrentData(res.data));

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=13d78c602470e61a84bec017bf38b026`
      )
      .then((res) => setForecastData(res.data));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return { currentData, forecastData };
};

export default useGetData;
