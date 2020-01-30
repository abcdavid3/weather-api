import React, { useState, useEffect } from "react";

const WeatherCard = () => {
  const [day, setDay] = useState("Monday");
  const [symbol, setSymbol] = useState();
  const [low, setLow] = useState("40°c");
  const [high, setHigh] = useState("60°c");

  const key = "f1d6f0494b1aa8c480e75e2793396bde";

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}`
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="summary-card">
      <div className="day-name">
        <p>{day}</p>
      </div>

      <img
        src="https://www.pngitem.com/pimgs/m/73-734609_storm-weather-symbol-of-a-dark-cloud-with.png"
        alt="Storm Cloud"
      ></img>
      <div className="temperatures">
        <p id="high">{high}</p>
        <p id="low">{low}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
