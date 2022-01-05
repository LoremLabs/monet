import type { Type } from "../../utils/constants";
export type { Type };

export { type, types } from "../../utils/constants";

export const href = "#learn-more";
export const ctaText = (type: Type) => {
	return "Purchase from Provider";
};
export const ctaTextMobile = (type: Type) => {
	return "Purchase";
};
export const heading1 = "The news you need, when you need it!";
export const heading2 = (type: Type) => {
	return {
		ad: "Read more with Ads",
		sub: "Read more with Subscription",
		webmon: "Read more with Web Monetization",
	}[type];
};
export const text = (type: Type) => {
	return {
		ad: `Our journalism is supported by readers like you.`,
		sub: `Our journalism is supported by readers like you.`,
		webmon: `Our journalism is supported by readers like you. Web Monetization sends money to us when you read, enabling us to report out the news you need. We call that a win-win.`,
	}[type];
};

export const getProps = (type: Type) => {
	return {
		href,
		ctaText: ctaText(type),
		ctaTextMobile: ctaTextMobile(type),
		heading1,
		heading2: heading2(type),
		text: text(type),
	};
};
