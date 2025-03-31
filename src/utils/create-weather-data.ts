import { range } from './range';
import { fetchWeather } from '../api/fetch-weather';

export function createWeatherData(rawWeatherData: Awaited<ReturnType<typeof fetchWeather>>) {
    if (!rawWeatherData) {
        console.error('Weather data is not available');
        return undefined;
    }
    // Attributes for timezone and location
    const utcOffsetSeconds = rawWeatherData.utcOffsetSeconds();
    const current = rawWeatherData.current();
    const daily = rawWeatherData.daily();

    if (!current) {
        console.error('Current weather data is not available');
        return undefined;
    }
    if (!daily) {
        console.error('Daily weather data is not available');
        return undefined;
    }

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0)!.value(),
            weatherCode: current.variables(1)!.value(),
        },
        daily: {
            time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
            weatherCode: daily.variables(0)!.valuesArray()!,
            temperature2mMean: daily.variables(1)!.valuesArray()!,
        },
    };

    return weatherData;
}