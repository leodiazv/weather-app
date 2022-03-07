import React from "react";

const currentDay = (nextDay) => {
  const d = new Date();
  d.setDate(nextDay + d.getDate());
  var options = {
    weekday: "long",
  };
  return d.toLocaleDateString("en-US", options);
};

const Forecast = ({ forecastData }) => {
  return (
    <div className="Forecast">
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${forecastData.daily?.[0].weather[0].icon}@2x.png`}
          alt="icono"
        />
        <p className="ForecastDay">{currentDay(1)}</p>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${forecastData.daily?.[1].weather[0].icon}@2x.png`}
          alt="icono"
        />
        <p className="ForecastDay">{currentDay(2)}</p>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${forecastData.daily?.[2].weather[0].icon}@2x.png`}
          alt="icono"
        />
        <p className="ForecastDay">{currentDay(3)}</p>
      </div>
    </div>
  );
};

export default Forecast;
