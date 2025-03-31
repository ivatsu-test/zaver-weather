import { findWeatherCodeDescription } from "../utils/find-weather-code-description";

const isSun = (weatherCode: number) => ["sun"].includes(findWeatherCodeDescription(weatherCode));
const isSunAndCloud = (weatherCode: number) => ["mostlyClear"].includes(findWeatherCodeDescription(weatherCode));
const isCloud = (weatherCode: number) => ["partlyCloudy"].includes(findWeatherCodeDescription(weatherCode));
const isDoubleCloud = (weatherCode: number) => ["cloudy"].includes(findWeatherCodeDescription(weatherCode));
const isRainAndThunder = (weatherCode: number) => ["thunderstorm", "thunderstormWithHail"].includes(findWeatherCodeDescription(weatherCode));

export function WeatherConditionImg({ weatherCode, size }: { weatherCode: number; size: "small" | 'large' }) {
    const imgSize = size === 'large' ? { width: 197, height: 142 } : { width: 90, height: 56 };

    return (
        <>
            {isSun(weatherCode) && <img src='/weather-icons/sun.svg' alt='sun' width={imgSize.width} height={imgSize.height} />}
            {isSunAndCloud(weatherCode) && <img src='/weather-icons/sun-and-cloud.svg' alt='sun-and-cloud' width={imgSize.width} height={imgSize.height} />}
            {isCloud(weatherCode) && <img src='/weather-icons/cloud.svg' alt='cloud' width={imgSize.width} height={imgSize.height} />}
            {isDoubleCloud(weatherCode) && <img src='/weather-icons/double-cloud.svg' alt='double-cloud' width={imgSize.width} height={imgSize.height} />}
            {isRainAndThunder(weatherCode) && <img src='/weather-icons/rain-and-thunder.svg' alt='rain' width={imgSize.width} height={imgSize.height} />}
        </>
    )
}