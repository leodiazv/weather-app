import React from "react";

const UserTempMaxMin = ({ userData, isCelsius }) => {
  const celsiusMax = Math.round(userData.main?.temp_max - 273.15);
  const celsiusMin = Math.round(userData.main?.temp_min - 273.15);
  const farenheitMax = Math.round(
    ((userData.main?.temp_max - 273.15) * 9) / 5 + 32
  );
  const farenheitMin = Math.round(
    ((userData.main?.temp_min - 273.15) * 9) / 5 + 32
  );

  return (
    <div>
      {isCelsius
        ? `${celsiusMax + "/" + celsiusMin + "°C"}`
        : `${farenheitMax + "/" + farenheitMin + "°F"}`}
    </div>
  );
};

export default UserTempMaxMin;
