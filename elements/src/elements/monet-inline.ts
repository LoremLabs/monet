import type { PropMap } from "../utils/custom-element.js";
import {
	init,
	ensureOneOf,
	getTypeFromElement,
} from "../utils/custom-element.js";

import App from "@elements/MonetInline/script.es.js";
import css from "@elements/MonetInline/style.css";
import * as defaults from "../components/MonetInline/defaults";

const propMap: PropMap = {
	type: (val, el) => {
		const type = ensureOneOf(val, defaults.types, el, "type", defaults.type);
		return {
			type,
			...(!el.hasAttribute("!heading1") && { heading1: defaults.heading1 }),
			...(!el.hasAttribute("!heading2") && {
				heading2: defaults.heading2(type),
			}),
			...(!el.hasAttribute("subtitle") && { subtitle: defaults.subtitle }),
			...(!el.hasAttribute("body") && { body: defaults.body(type) }),
			...(!el.hasAttribute("cta") && { ctaText: defaults.ctaText(type) }),
			...(!el.hasAttribute("href") && { href: defaults.href }),
		};
	},
	theme: (value, el) => {
		const options = ["light", "dark", "dim"];
		const theme = ensureOneOf(value, options, el, "theme", defaults.theme);
		return { theme };
	},
	heading1: (value) => ({ heading1: value || defaults.heading1 }),
	heading2: (value, el) => ({
		heading2: value || defaults.heading2(getTypeFromElement(el)),
	}),
	subtitle: (value) => ({ subtitle: value || defaults.subtitle }),
	body: (value, el) => ({
		body: value || defaults.body(getTypeFromElement(el)),
	}),
	cta: (value, el) => ({
		ctaText: value || defaults.ctaText(getTypeFromElement(el)),
	}),
	href: (value) => ({ href: value || defaults.href }),
};

init("monet-inline", propMap, App, css);
