import React from "react";

const UserTemp = ({ userData, isCelsius }) => {
  const celsius = Math.round(userData.main?.temp - 273.15) + " °C";
  const farenheit =
    Math.round(((userData.main?.temp - 273.15) * 9) / 5 + 32) + " °F";

  return <div className="UserTemp">{isCelsius ? celsius : farenheit}</div>;
};

export default UserTemp;
