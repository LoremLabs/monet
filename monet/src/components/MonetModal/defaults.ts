import type { Type } from "../../utils/constants";
export type { Type };
export type Theme = "light" | "dark" | "accent";
export type Variant = "center" | "bottom";

export { type, types } from "../../utils/constants";
export const themes: Theme[] = ["light", "dark", "accent"];
export const variants: Variant[] = ["center", "bottom"];

export const theme: Theme = "light";
export const variant: Variant = "center";
export const subtitle = "The news you need, when you need it!";
export const heading = (type: Type) => {
	return {
		ad: "Read more with Ads",
		sub: "Read more with Subscription",
		webmon: "Read more with Web Monetization",
	}[type];
};
export const href = "#learn-more";
export const ctaText = "Purchase";
export const text = (type: Type) => {
	return {
		ad: `Our journalism is supported by readers like you.`,
		sub: `Our journalism is supported by readers like you.`,
		webmon: `Our journalism is supported by readers like you. Web Monetization sends money to us when you read, enabling us to report out the news you need. We call that a win-win.`,
	}[type];
};

export const getProps = (type: Type) => {
	return {
		subtitle,
		heading: heading(type),
		href,
		ctaText,
		text: text(type),
	};
};
