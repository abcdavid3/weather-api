import React, { useState } from "react";
import ReactDOM from "react-dom";
import WeatherCard from "./WeatherCard";

const App = () => {
  return (
    <div>
      <header>Weather stuff!</header>
      <WeatherCard />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
