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
};

init("monet-inline", propMap, App, css);
