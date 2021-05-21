import { init } from "./utils/custom-element.js";

import App from "../dist/MyElement/script.es.js";
import css from "../dist/MyElement/style.css";

/*#__INLINE__*/
init("my-element", ["name"], App, css);
