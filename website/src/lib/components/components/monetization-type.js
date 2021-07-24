// @ts-check
import { readable } from 'svelte/store';

/**
 * Readable store to get user's monetization preference.
 * @typedef {import('@loremlabs/monet/src/utils/constants').Type} Type
 */

const defaultValue = /** @type {Type} */ ('webmon');

/**
 * @param {string} pref
 * @returns {Type}
 */
function mapPrefToType(pref) {
	switch (true) {
		case pref.startsWith('webmonetization'):
			return 'webmon';
		case pref.startsWith('ads'):
			return 'ad';
		case pref.startsWith('subscription'):
			return 'sub';
		default:
			console.warn(`Unsupported preference: ${pref}`);
			return defaultValue;
	}
}

/** @type {import("svelte/store").Readable<Type>} */
const store = readable(defaultValue, (set) => {
	if (typeof window === 'undefined' || !window.monet || !window.monet.userPreferences) {
		console.warn(`window.monet is not defined`);
		return;
	}

	const monet = window.monet;
	const listener = () => {
		const allowedCapabilities = monet.userPreferences.get().allows;
		if (allowedCapabilities.length) {
			set(mapPrefToType(allowedCapabilities[0]));
		} else {
			set(undefined);
		}
	};

	listener();
	monet.userPreferences.addEventListener('change', listener);
	return () => monet.userPreferences.removeEventListener('change', listener);
});

export default store;
