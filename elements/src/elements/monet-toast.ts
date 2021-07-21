import {
	ensureOneOf,
	init,
	PropMap,
	getTypeFromElement,
} from "../utils/custom-element.js";

import App from "@elements/MonetToast/script.es.js";
import css from "@elements/MonetToast/style.css";
import * as defaults from "../components/MonetToast/defaults";

const propMap: PropMap = {
	type(val, el) {
		const type = ensureOneOf(val, defaults.types, el, "type", defaults.type);
		return {
			type,
			...(!el.hasAttribute("text") && { text: defaults.text(type) }),
		};
	},
	text(val, el) {
		return { text: val || defaults.text(getTypeFromElement(el)) };
	},
};
init("monet-toast", propMap, App, css);
