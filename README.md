# Zaver Weather

Zaver Weather is a weather application that fetches and processes weather data using the OpenMeteo API. It provides utilities to transform raw weather data into a structured format for use in applications.

## Features

- Fetches weather data from the OpenMeteo API.
- Processes raw weather data into a structured format.
- Supports current and daily weather information.

## Project Structure

- **`src/api/`**: Contains API-related code, such as fetching weather data.
- **`src/components/`**: Contains componens for displaying UI.
- **`src/utils/`**: Contains utility functions for processing weather data.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/zaver-weather.git
   cd zaver-weather
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the required API keys or configurations.

4. Run the project:
   ```bash
   npm start
   ```

## Usage

- Use the `fetchWeather` function to retrieve weather data from the OpenMeteo API.
- Use the `createWeatherData` utility to process the raw weather data into a structured format.
- Use the `findWeatherCodeDescription` to parse received code and receive a readable string.
- Use the `parseDailyWeatherData` to parse received API data into chunks needed for FED.

## Acknowledgments

- [OpenMeteo API](https://open-meteo.com/) for providing weather data.

## What Could Be Improved

- **UI Enhancements**: Create a cohesive color scheme and implement a responsive layout using CSS Modules or a any CSS framework that would define the style base/schema.
- **Component Structure**: Refactor components to achieve better separation of concerns, simplifying `App.tsx`, i.e. current and daily weather can be split into separate components.
- **Error Handling**: Add robust error handling for API calls and user feedback for network issues, add Zod to act as DTO for API calls and be a SSOT for DTO.
- **Testing**: Increase test coverage by adding unit tests for utilities and integration tests for API calls.
- **Documentation**: Expand the documentation to include examples of how to use the utilities and API functions.