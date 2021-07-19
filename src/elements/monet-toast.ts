import type { Type } from "../utils/constants";
import { ensureOneOf, init, PropMap } from "../utils/custom-element.js";

import App from "@elements/MonetToast/script.es.js";
import css from "@elements/MonetToast/style.css";
import * as defaults from "../components/MonetToast/defaults";

const getType = (el: HTMLElement) => {
	const type = el.getAttribute("type");
	return type ? (type as Type) : defaults.type;
};

const propMap: PropMap = {
	type(val, el) {
		const type = ensureOneOf(val, defaults.types, el, "type", defaults.type);
		return {
			type,
			...(!el.hasAttribute("text") && { text: defaults.text(type) }),
		};
	},
	text(val, el) {
		return { text: val || defaults.text(getType(el)) };
	},
};
init("monet-toast", propMap, App, css);
