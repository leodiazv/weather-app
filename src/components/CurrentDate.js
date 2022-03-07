import React from "react";

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const getLongDate = () => {
  const d = new Date();

  return d.toLocaleDateString("en-US", options);
};

console.log(getLongDate());

const CurrentDate = () => {
  return (
    <div>
      <p className="CurrentDate">{getLongDate()}</p>
    </div>
  );
};

export default CurrentDate;
