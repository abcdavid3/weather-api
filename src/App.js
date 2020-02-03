import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import WeatherCard from "./WeatherCard";

const App = () => {
  const [day, setDay] = useState("Monday");
  const [symbol, setSymbol] = useState();
  const [low, setLow] = useState("40°c");
  const [high, setHigh] = useState("60°c");
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("UK");
  const [days, setDays] = useState([]);

  const key = "f1d6f0494b1aa8c480e75e2793396bde";

  //   const forecast = `api.openweathermap.org/data/2.5/forecast?q=${city},${country}`;

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}`
    )
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(updateWeather);
  }, []);

  const updateWeather = data => {
    console.log(data);
    setCity(data.city.name);
    const lowTemp = data.list[0].main.temp_min;
    const highTemp = data.list[0].main.temp_max;
    const lowInput = createTemp(lowTemp);
    const highInput = createTemp(highTemp);
    setLow(Math.round(lowInput));
    setHigh(Math.round(highInput));
    setDays(data);
  };
  const createTemp = input => {
    let result = (input - 32) * (5 / 9);
    return result;
  };
  return (
    <div>
      <header>Weather stuff!</header>
      <div className="container">
        <WeatherCard city={city} day={day} high={high} low={low} />
        <WeatherCard city={city} day={day} high={high} low={low} />
        <WeatherCard city={city} day={day} high={high} low={low} />
        <WeatherCard city={city} day={day} high={high} low={low} />
        <WeatherCard city={city} day={day} high={high} low={low} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
