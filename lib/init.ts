import {ICity, ICountry, IState} from "./interface";

export default class Init {
	static city: ICity[];
	static state: IState[];
	static country: ICountry[];

	static loadCity() {
		this.makeHttpRequest('https://cdn.kizora.in/city-state-country/city.json', response => {
			this.city = response
		})
	}

	static loadState() {
		this.makeHttpRequest('https://cdn.kizora.in/city-state-country/state.json', response => {
			this.state = response
		})
	}

	static loadCountry() {
		this.makeHttpRequest('https://cdn.kizora.in/city-state-country/country.json', response => {
			this.country = response
		})
	}

	private static makeHttpRequest(url: string, done: (response: any[]) => void) {
		let request = new XMLHttpRequest;
		request.open('GET', url, true);

		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				// Success!
				done(JSON.parse(request.responseText));
			} else {
				// We reached our target server, but it returned an error
			}
		};

		request.onerror = function () {
			// There was a connection error of some sort
		};

		request.send();
	}

	static loadData() {
		this.loadCountry()
		this.loadState()
		this.loadCity()
	}
}
