import { init, PropMap } from "../utils/custom-element.js";

import App from "@elements/MonetRiser/script.es.js";
import css from "@elements/MonetRiser/style.css";
import * as defaults from "../components/MonetRiser/defaults";

const getShortCta = (cta) => cta.split(" ", 2)[0];

const propMap: PropMap = {
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
