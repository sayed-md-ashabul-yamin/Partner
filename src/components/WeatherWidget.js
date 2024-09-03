import React from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
    return (
        <div className="weather-widget">
            <div className="weather-info">
                <p className="temperature">31°C</p>
                <p className="location">Bangalore, India</p>
            </div>
            <div className="weather-icon">
                <img src="weather-icon-url" alt="Weather" />
            </div>
        </div>
    );
};

export default WeatherWidget;
