import { fetchWeatherApi } from "openmeteo";
import { GeocodingResponse } from "./fetch-geocoding";
import { OPEN_METEO_FORECAST_URL } from "../constants";

export async function fetchWeather({ latitude, longitude }: GeocodingResponse['results'][0]) {
    const params = {
        latitude,
        longitude,
        "current": ["temperature_2m", "weather_code"],
        "daily": ["weather_code", "temperature_2m_mean"],
    };

    try {
        const responses = await fetchWeatherApi(OPEN_METEO_FORECAST_URL, params);
        return responses[0];
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}