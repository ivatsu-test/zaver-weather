import React from 'react';

import { fetchGeocoding } from './api/fetch-geocoding';
import { fetchWeather } from './api/fetch-weather';
import { createWeatherData } from './utils/create-weather-data';
import { parseDailyWeatherData } from './utils/parse-daily-weather-data';

import './App.css';
import { WeatherConditionImg } from './components/weather-conditon-img';

interface WeatherData {
  temperature: number;
  weatherCode: number;
}

interface WeatherDataWithTime extends WeatherData {
  time: Date;
}

interface DailyWeatherData extends WeatherData {
  day: string;
}

function App() {
  const [city, setCity] = React.useState('');
  const [geocodingCity, setGeocodingCity] = React.useState("")
  const [currentWeather, setCurrentWeather] = React.useState<WeatherDataWithTime | undefined>(undefined);
  const [dailyWeather, setDailyWeather] = React.useState<DailyWeatherData[]>([]);

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }

  const onClick = async () => {
    setDailyWeather([]);
    setCity('');
    setCurrentWeather(undefined);
    const geocodingData = await fetchGeocoding(city);
    if (!geocodingData) {
      console.error('Geocoding data is not available');
      return;
    }
    setGeocodingCity(geocodingData.name);
    const response = await fetchWeather(geocodingData);
    if (!response) {
      console.error('Weather data is not available');
      return;
    }

    const weatherData = createWeatherData(response);
    if (!weatherData) {
      console.error('Weather data is not available');
      return;
    }

    setCurrentWeather({
      temperature: Math.round(weatherData.current.temperature2m),
      weatherCode: weatherData.current.weatherCode,
      time: weatherData.current.time,
    });

    const dailyWeather = parseDailyWeatherData({
      weatherData: weatherData.daily, days: 5
    });

    setDailyWeather(dailyWeather);
  }

  return (
    <div className="main-container">
      <div className='input-section'>
        <input className="c-input" type="text" placeholder="Enter a city ..." onChange={onCityChange} value={city}/>
        <button className="c-btn-search" type='button' onClick={onClick}>Search</button>
      </div>

      {currentWeather && (
        <>
          <div className='current-weather-section'>
            <WeatherConditionImg weatherCode={currentWeather.weatherCode} size='large' />
            <div className='current-weather'>
              <p className='current-weather__temperature'>
                {currentWeather.temperature}°C
              </p>
              <p className='current-weather__city'>
                {geocodingCity}
              </p>
              <p>{`${currentWeather.time.toLocaleDateString("en-US", { weekday: "long" })} ${currentWeather.time.toLocaleTimeString()}`}</p>
            </div>
          </div>

          <div className='separator'></div>

          <div className="daily-weather-block">
            {dailyWeather.map((item, index) => {
              return (
                <div key={index} className="daily-weather-item">
                  <WeatherConditionImg weatherCode={item.weatherCode} size='small' />
                  <p className="daily-weather-item__day">
                    {item.day}
                  </p>
                  <p className="daily-weather-item__temperature">
                    {item.temperature}°C
                  </p>
                </div>
              )
            })}
          </div>
        </>
      )}

    </div>
  );
}

export default App;
