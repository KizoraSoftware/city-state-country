import {compare} from '../utils';
import {ICity} from "./interface";
import {makeHttpRequest} from './http-util'

let city: ICity[] = [];
makeHttpRequest('https://cdn.kizora.in/city-state-country/city.json', response => {
	city = response
})

// Get a list of all cities.
function getAllCities(): any[] {
	return city;
}

// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode: string, stateCode: string): any[] {
	if (!stateCode) return [];
	if (!countryCode) return [];

	const cities = city.filter((value: { countryCode: string; stateCode: string }) => {
		return value.countryCode === countryCode && value.stateCode === stateCode;
	});
	return cities.sort(compare);
}

// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode: string): any[] | undefined {
	if (!countryCode) return [];

	const cities = city.filter((value: { countryCode: string }) => {
		return value.countryCode === countryCode;
	});
	return cities.sort(compare);
}

export default {
	getAllCities,
	getCitiesOfState,
	getCitiesOfCountry,
};
