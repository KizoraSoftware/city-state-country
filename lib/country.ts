import {findEntryByCode} from '../utils';
import {ICountry} from './interface';
import fetch from 'cross-fetch';

let country: ICountry[] = [];

(async () => {
	let res = await fetch('https://cdn.kizora.in/city-state-country/country.json');
	country = await res.json()
})();

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
