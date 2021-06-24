import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = (props) => {
  const [name, setName] = useState("New York");
  const [weather, setWeather] = useState({});

  const fetchData = (name) => {
    const key = "af4bef339069f117d3aafbea2cb7e7c5";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric`;
    axios.get(url).then((response) => {
      if (response && response.data && response.status === 200) {
        setWeather(response.data);
      }
    });
  };
  useEffect(() => {
    fetchData(name);
  }, [name]);

  return (
    <div>
      <h1>{name}</h1>
      {weather.main && <div>{weather.main.temp}</div>}
    </div>
  );
};

export default Weather;
