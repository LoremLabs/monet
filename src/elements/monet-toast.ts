import { init, PropMap } from "../utils/custom-element.js";

import App from "@elements/MonetToast/script.es.js";
import css from "@elements/MonetToast/style.css";
import * as defaults from "../components/MonetToast/defaults";

const propMap: PropMap = {
	text: (val) => ({ text: val || defaults.text }),
};
init("monet-toast", propMap, App, css);
