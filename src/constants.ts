export const OPEN_METEO_FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';
export const OPEN_METEO_GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export const weatherCodeToDescription: { [key: string]: number[] } = {
    "sun": [0], // Clear sky
    "mostlyClear": [1], // Mostly clear
    "partlyCloudy": [2], // Partly cloudy
    "cloudy": [3], // Overcast
    "fog": [45, 48], // Fog and rime fog
    "drizzle": [51, 53, 55], // Light to dense drizzle
    "freezingDrizzle": [56, 57], // Light to dense freezing drizzle
    "rain": [61, 63, 65], // Light to heavy rain
    "freezingRain": [66, 67], // Light to heavy freezing rain
    "snow": [71, 73, 75, 77], // Light to heavy snowfall, snow grains
    "snowShowers": [85, 86], // Light to heavy snow showers
    "rainShowers": [80, 81, 82], // Light to violent rain showers
    "thunderstorm": [95], // Slight or moderate thunderstorm
    "thunderstormWithHail": [96, 99], // Thunderstorm with hail
};
