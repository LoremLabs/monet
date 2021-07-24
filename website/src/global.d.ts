/// <reference types="@sveltejs/kit" />
/// <reference types="@loremlabs/monetization-capability-api/build"/>

import { Monetization } from '@loremlabs/monetization-capability-api/build';

declare global {
	interface Window {
		monet?: Monetization;
	}
}
