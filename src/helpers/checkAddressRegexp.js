export function checkAddressRegexp(address) {
	const regexp = /^0x[0-9A-F]{40}$/i;
	const result = regexp.test(address);
	return result;
}