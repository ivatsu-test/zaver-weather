import { weatherCodeToDescription } from "../constants";

export const findWeatherCodeDescription = (code: number) => {
  for (const [key, values] of Object.entries(weatherCodeToDescription)) {
    if (values.includes(code)) {
      return key;
    }
  }
  return 'unknown';
}