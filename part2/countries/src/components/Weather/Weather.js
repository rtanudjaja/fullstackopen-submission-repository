import { useState, useEffect } from "react";
import axios from "axios";

export const Weather = ({ capital, lat, lng }) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, [lat, lng]);

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>
        temparature {Number(+weatherData.main.temp - 273.15).toFixed(2)}°
        Celcius
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
      />
      <p>wind {weatherData.wind.speed} m/s</p>
    </div>
  );
};
