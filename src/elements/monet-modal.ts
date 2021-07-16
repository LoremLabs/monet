import type { PropMap } from "../utils/custom-element.js";
import { init, ensureOneOf } from "../utils/custom-element.js";

import App from "@elements/MonetModal/script.es.js";
import css from "@elements/MonetModal/style.css";
import * as defaults from "../components/MonetModal/defaults";

const propMap: PropMap = {
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
};

init("monet-modal", propMap, App, css);
