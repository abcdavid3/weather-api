import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import Details from "./details.js";

const WeatherCard = props => {
  const [details, setDetails] = useState(false);
  console.log(props.info);

  const options = props.info;

  return (
    <div className="summary-card" onClick={() => setDetails(!details)}>
      {/* {options.map(item => ( */}
      <div className="day-name">{props.city}</div>
      <div className="day-name">
        <p>{props.day}</p>
      </div>

      <img
        src="https://www.pngitem.com/pimgs/m/73-734609_storm-weather-symbol-of-a-dark-cloud-with.png"
        alt="Storm Cloud"
      ></img>
      <div className="temperatures">
        <p id="high">{props.high}</p>
        <p id="low">{props.low}</p>
      </div>
      <div className="container">
        {details ? (
          options.map(item => (
            <div className="details" key={item}>
              <Details
                hours={item.dt_txt.slice(10, 16)}
                max_temp={item.main.temp_max}
                min_temp={item.main.temp_min}
              />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
      {/* ))} */}
    </div>
  );
};

export default WeatherCard;
