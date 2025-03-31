import { OPEN_METEO_GEOCODING_URL } from "../constants";


export interface GeocodingResponse {
    results: {
        latitude: number;
        longitude: number;
        name: string;
    }[];
}

export async function fetchGeocoding(city: string) {
    try {
        const cityGeocoding = await fetch(`${OPEN_METEO_GEOCODING_URL}?name=${city}&count=1`);
        const cityGeocityGeocodingData = await cityGeocoding.json() as GeocodingResponse;
        if (!cityGeocityGeocodingData.results || cityGeocityGeocodingData.results.length === 0) {
            throw new Error('No results found for the given city.');
        }
        const { latitude, longitude, name } = cityGeocityGeocodingData.results[0];
        return {latitude, longitude, name};
    } catch (error) {
        console.error('Error fetching geocoding:', error);
    }

}