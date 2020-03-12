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
  const [info, setInfo] = useState();

  const key = "f1d6f0494b1aa8c480e75e2793396bde";

  //   const forecast = `api.openweathermap.org/data/2.5/forecast?q=${city},${country}`;

  useEffect(() => {
    const updateWeather = data => {
      console.log(data);
      setInfo(data);
      setCity(data.city.name);
      let newHighTemp = 0;
      data.list.forEach(input => {
        newHighTemp += input.main.temp_max;
      });
      const lowTemp = data.list[0].main.temp_min;
      const highTemp = data.list[0].main.temp_max;
      const lowInput = createTemp(lowTemp);
      const highInput = createTemp(highTemp);
      setLow(Math.round(lowInput));
      setHigh(Math.round(highInput));
    };

    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}`
    )
      .then(response => response.json())
      .then(updateWeather);
  }, []);

  const createTemp = input => {
    let result = (input - 32) * (5 / 9);
    return result;
  };

  // info.forEach(input => {
  //   let counter = 0;
  //   let allTemp = 0;
  //   counter += 1;
  //   allTemp += input.list;
  //   return allTemp / counter;
  // });

  const changeDay = input => {
    let change = new Date(input);
    change.getDay();
  };

  return (
    <div>
      <header>Weather stuff!</header>
      <div className="container">
        {info ? (
          info.list.map(item => (
            <div className="container" key={day}>
              <WeatherCard
                city={city}
                day={String(new Date(item.dt_txt)).slice(0, 4)}
                high={high}
                low={low}
                info={info && info.list}
              />
            </div>
          ))
        ) : (
          <div className="container">
            <p>no</p>
          </div>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
