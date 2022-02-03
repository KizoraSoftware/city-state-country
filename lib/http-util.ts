export function makeHttpRequest<T>(url: string, done: (response: any[]) => void) {
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
