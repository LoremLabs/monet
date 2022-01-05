import type { Type } from "../../utils/constants";
export type { Type };
export type Theme = "light" | "dark" | "dim";

export { type, types } from "../../utils/constants";
export const theme: Theme = "light";
export const heading1 = "The news you need, when you need it!";
export const heading2 = (type: Type) => {
	return {
		ad: "Read more with Ads",
		sub: "Read more with Subscription",
		webmon: "Read more with Web Monetization",
	}[type];
};
export const subtitle = "";
export const body = (type: Type) => {
	return {
		ad: ``,
		sub: ``,
		webmon: `Our journalism is supported by readers like you. Web Monetization sends money to us when you read, enabling us to report out the news you need. We call that a win-win.`,
	}[type];
};
export const ctaText = (type: Type) => {
	return {
		ad: "Disable your ad-blocker",
		sub: "Purchase monthly subscription",
		webmon: "Purchase Web Monetization Pass",
	}[type];
};
export const href = "#learn-more";

export const getProps = (type: Type) => ({
	heading1,
	heading2: heading2(type),
	subtitle,
	body: body(type),
	ctaText: ctaText(type),
	href,
});
