
import './App.css';
import WeatherCard from './Weather';

import cloud_icon from "../src/components/Assets/cloud.png"
import clear_icon from "../src/components/Assets/clear.png"
import humidity_icon from "../src/components/Assets/humidity.png"
import wind_icon from "../src/components/Assets/wind.png"
import search_icon from "../src/components/Assets/search.png"
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [country, setCountry] = useState('Chennai');
  const [weatherData, setWeatherData] = useState({});
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=Metric&appid=c0d8b8001ea673ae7d64b5dc8d2e0ed7`;

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(weatherUrl);
      setWeatherData({
        place: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert("Invalid location or empty input!");
    }
  };

  const search = () => {
    if (country.trim()) {
      fetchWeather();
    } else {
      alert("Please enter a location");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []); 

  return (
    <div className="App">
      <div className="weather-card">
        <div className="search-container">
          <input name="search" onChange={handleChange} type="text" placeholder="Search..." value={country} />
          <img onClick={search} src={search_icon} className="search-icon" alt="Search" />
        </div>
        {weatherData.temp < 20? <img src={clear_icon} alt="Weather Icon" className="weather-icon" />: <img src={cloud_icon} alt="Weather Icon" className="weather-icon" />}
        {/* <img src={cloud_icon} alt="Weather Icon" className="weather-icon" /> */}
        <div className="temperature">{weatherData.temp}°C</div>
        <div className="country-name">{weatherData.place}</div>
        <div className="weather-details">
          <div className="humidity">
            
            <img src={humidity_icon} className="humidity-icon" alt="Humidity Icon" /> <p><span>{weatherData.humidity}%</span></p>
          </div>
          <div className="wind-speed">
            <img src={wind_icon} className="wind-speed-icon" alt="Wind Speed Icon" /> <p><span>{weatherData.wind} km/h</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;