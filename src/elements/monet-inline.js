import { init } from "../utils/custom-element.js";

import App from "@components/MonetInline/script.es.js";
import css from "@components/MonetInline/style.css";

/** @type {PropMap} */
const propMap = {
	theme: (value) => (/^(light|dark|dim)$/.test(value) ? value : "light"),
};

(() => {
	/*#__INLINE__*/
	init("monet-inline", propMap, App, css);
})();
