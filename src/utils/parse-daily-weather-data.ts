import { createWeatherData } from "./create-weather-data";

type DailyWeatherData = NonNullable<ReturnType<typeof createWeatherData>>["daily"];

export function parseDailyWeatherData({weatherData, days}: { weatherData: DailyWeatherData, days: number }) {
    return weatherData.time.slice(1, days + 1).map((_, index) => ({
        temperature: Math.round(weatherData.temperature2mMean[index + 1]),
        weatherCode: weatherData.weatherCode[index + 1],
        day: weatherData.time[index + 1].toLocaleDateString("en-US", { weekday: "long"}),
    }));
}