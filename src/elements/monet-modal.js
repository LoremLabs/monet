import { init } from "../utils/custom-element.js";

import App from "@components/MonetModal/script.es.js";
import css from "@components/MonetModal/style.css";

/** @type {PropMap} */
const propMap = {
	theme: (value) => (/^(light|dark|accent)$/.test(value) ? value : "light"),
	variant: (value) => (/^(center|bottom)$/.test(value) ? value : "center"),
};

(() => {
	/*#__INLINE__*/
	init("monet-modal", propMap, App, css);
})();
