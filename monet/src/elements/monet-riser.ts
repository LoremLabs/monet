import { init, ensureOneOf, PropMap } from "../utils/custom-element.js";

import App from "@elements/MonetRiser/script.es.js";
import css from "@elements/MonetRiser/style.css";
import * as defaults from "../components/MonetRiser/defaults";

const getShortCta = (cta) => cta.split(" ", 2)[0];

const propMap: PropMap = {
	type: (val, el) => {
		const type = ensureOneOf(val, defaults.types, el, "type", defaults.type);
		return {
			type,
			...(!el.hasAttribute("href") && { heading1: defaults.href }),
			...(!el.hasAttribute("cta") && { ctaText: defaults.ctaText(type) }),
			...(!el.hasAttribute("cta-short") && {
				ctaTextMobile: defaults.ctaTextMobile(type),
			}),
			...(!el.hasAttribute("heading1") && { heading1: defaults.heading1 }),
			...(!el.hasAttribute("heading2") && {
				heading2: defaults.heading2(type),
			}),
			...(!el.hasAttribute("text") && { text: defaults.text(type) }),
		};
	},
	href: (val) => ({ href: val || defaults.href }),
	cta: (val, el) => {
		const ctaText = val || defaults.ctaText;
		return {
			ctaText,
			...(!el.hasAttribute("cta-short") && {
				ctaTextMobile: getShortCta(ctaText),
			}),
		};
	},
	"cta-short": (val, el) => {
		return {
			ctaTextMobile:
				val || getShortCta(el.getAttribute("cta")) || defaults.ctaTextMobile,
		};
	},
	heading1: (val) => ({ heading1: val || defaults.heading1 }),
	heading2: (val) => ({ heading2: val || defaults.heading2 }),
	text: (val) => ({ text: val || defaults.text }),
};

init("monet-riser", propMap, App, css);
