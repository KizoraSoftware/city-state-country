import country from './init';
import { findEntryByCode } from '../utils';
import { ICountry } from './interface';

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
