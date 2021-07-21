import type { Type } from "../../utils/constants";
export type { Type };

export { type, types } from "../../utils/constants";
export const text = (type: Type) => {
	return {
		ad: "This site is monetized with ads.",
		sub: "Thank you, dear subscriber.",
		webmon: "This site is web-monetized.",
	}[type];
};
