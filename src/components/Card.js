import React from "react";
import { useEffect, useState } from "react";
import CurrentDate from "./CurrentDate";
import UserTemp from "./UserTemp";
import UserTempMaxMin from "./UserTempMaxMin";
import Forecast from "./Forecast";
import useGetData from "../Hooks/useGetData";
import useBackImage from "../Hooks/useBackImage";

const Card = () => {
  const { currentData, forecastData } = useGetData();
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemp = () => setIsCelsius(isCelsius ? false : true);
  console.log(isCelsius);

  const weatherDescription =
    currentData.weather?.[0].description.charAt(0).toUpperCase() +
    currentData.weather?.[0].description.slice(1);

  console.log(weatherDescription);

  const { imageUrl } = useBackImage();

  return (
    <div className="Card">
      <div>
        <h1 className="City">
          {currentData.name?.toUpperCase()}, {currentData.sys?.country}
        </h1>
        <CurrentDate />
      </div>
      <UserTemp userData={currentData} isCelsius={isCelsius} />
      <div className="WeatherIcon">
        {currentData.weather?.[0].icon && (
          <img
            src={`http://openweathermap.org/img/wn/${currentData.weather?.[0].icon}@2x.png`}
            alt="icono"
          />
        )}
        <p className="WeatherDescription">{weatherDescription}</p>
      </div>
      {/* <UserTempMaxMin userData={currentData} isCelsius={isCelsius} /> */}

      <Forecast forecastData={forecastData} />

      <button className="ToggleTemp" onClick={toggleTemp}>
        C°/F°
      </button>
    </div>
  );
};

export default Card;
