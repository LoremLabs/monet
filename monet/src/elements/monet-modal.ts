import type { PropMap } from "../utils/custom-element.js";
import { init, ensureOneOf } from "../utils/custom-element.js";

import App from "@elements/MonetModal/script.es.js";
import css from "@elements/MonetModal/style.css";
import * as defaults from "../components/MonetModal/defaults";

const propMap: PropMap = {
	type: (val, el) => {
		const type = ensureOneOf(val, defaults.types, el, "type", defaults.type);
		return {
			type,
			...(!el.hasAttribute("heading1") && { heading1: defaults.heading(type) }),
			...(!el.hasAttribute("subtitle") && { subtitle: defaults.subtitle }),
			...(!el.hasAttribute("cta") && { ctaText: defaults.ctaText }),
			...(!el.hasAttribute("text") && { text: defaults.text(type) }),
			...(!el.hasAttribute("href") && { href: defaults.href }),
		};
	},
	theme: (value, el) => {
		const options = ["light", "dark", "accent"];
		const theme = ensureOneOf(value, options, el, "theme", defaults.theme);
		return { theme };
	},
	variant: (value, el) => {
		const options = ["center", "bottom"];
		const attr = "variant";
		const variant = ensureOneOf(value, options, el, attr, defaults.variant);
		return { variant };
	},
	subtitle: (value) => ({ subtitle: value || defaults.subtitle }),
	heading: (value) => ({ heading: value || defaults.heading }),
	href: (value) => ({ href: value || defaults.href }),
	cta: (value) => ({ ctaText: value || defaults.ctaText }),
	text: (value) => ({ text: value || defaults.text }),
};

init("monet-modal", propMap, App, css);
