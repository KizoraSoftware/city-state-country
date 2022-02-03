import {findEntryByCode, findStateByCodeAndCountryCode, compare} from '../utils';
import {ICity, IState} from "./interface";
import {makeHttpRequest} from "./http-util";

let state: IState[] = [];
makeHttpRequest('https://cdn.kizora.in/city-state-country/city.json', response => {
	state = response
})

// Get a list of all states.
export function getAllStates(): Array<IState> {
	return state;
}

// Get a list of states belonging to a specific country.
export function getStatesOfCountry(countryCode: string): Array<IState> {
	if (!countryCode) return [];
	const states = state.filter((value) => {
		return value.countryCode === countryCode;
	});
	return states.sort(compare);
}

// Find a country by it's ISO code and the country in which it is contained.
export function getStateByCodeAndCountry(stateCode: string, countryCode: string): IState | undefined {
	if (!stateCode) return undefined;
	if (!countryCode) return undefined;

	return findStateByCodeAndCountryCode(state, stateCode, countryCode);
}

// to be deprecate
export function getStateByCode(isoCode: string): IState | undefined {
	// eslint-disable-next-line no-console
	console.warn(
		`WARNING! 'getStateByCode' has been deprecated, please use the new 'getStateByCodeAndCountry' function instead!`,
	);
	if (!isoCode) return undefined;

	return findEntryByCode(state, isoCode);
}

export default {
	getAllStates,
	getStatesOfCountry,
	getStateByCodeAndCountry,
	getStateByCode,
};
