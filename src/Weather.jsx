import React from 'react';
import '../src/Weather.css'

function WeatherCard() {
  return (
    <div className="weather-card">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <i className="fas fa-search search-icon"></i>
      </div>
      <div className="weather-info">
        <img src="weather-icon.png" alt="Weather Icon" className="weather-icon" />
        <div className="temperature">25°C</div>
        <div className="country">Country Name</div>
        <div className="weather-details">
          <div className="humidity">
            <i className="fas fa-tint humidity-icon"></i>
            <span>Humidity: 60%</span>
          </div>
          <div className="wind-speed">
            <i className="fas fa-wind wind-icon"></i>
            <span>Wind Speed: 10 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
