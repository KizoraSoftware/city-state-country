import {findEntryByCode} from '../utils';
import {ICity, ICountry} from './interface';
import {makeHttpRequest} from "./http-util";

let country: ICountry[] = [];
makeHttpRequest('https://cdn.kizora.in/city-state-country/country.json', response => {
	country = response
})

// Get a country by isoCode.
function getCountryByCode(isoCode: string): ICountry | undefined {
	if (!isoCode) return undefined;

	return findEntryByCode(country, isoCode);
}

// Get a list of all countries.
function getAllCountries(): ICountry[] {
	return country;
}

export default {
	getCountryByCode,
	getAllCountries,
};
