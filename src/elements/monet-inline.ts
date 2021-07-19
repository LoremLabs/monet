import type { PropMap } from "../utils/custom-element.js";
import { init, ensureOneOf } from "../utils/custom-element.js";

import App from "@elements/MonetInline/script.es.js";
import css from "@elements/MonetInline/style.css";
import * as defaults from "../components/MonetInline/defaults";

const propMap: PropMap = {
	theme: (value, el) => {
		const options = ["light", "dark", "dim"];
		const theme = ensureOneOf(value, options, el, "theme", defaults.theme);
		return { theme };
	},
	heading1: (value) => ({ heading1: value || defaults.heading1 }),
	heading2: (value) => ({ heading2: value || defaults.heading2 }),
	subtitle: (value) => ({ subtitle: value || defaults.subtitle }),
	body: (value) => ({ body: value || defaults.body }),
	cta: (value) => ({ ctaText: value || defaults.ctaText }),
	href: (value) => ({ href: value || defaults.href }),
};

init("monet-inline", propMap, App, css);
