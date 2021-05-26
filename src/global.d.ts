/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Monetization extends EventTarget {
	addEventListener(
		type: "monetizationprogress",
		listener: (ev: MonetizationProgressEvent) => void,
	): void;
}

interface Document {
	monetization: Monetization;
}

type MonetizationProgressEvent = CustomEvent<{
	amount: string;
	assetCode: string;
	assetScale: number;
}>;
