import { init } from "../utils/custom-element.js";

import App from "../../dist/components/MonetInline/script.es.js";
import css from "../../dist/components/MonetInline/style.css";

/** @type {PropMap} */
const propMap = {
	theme(value) {
		switch (value) {
			case "light":
			case "dark":
			case "dim":
				return value;
			default:
				return "dark";
		}
	},
};

/*#__INLINE__*/
init("monet-inline", propMap, App, css);
