import { init } from "../utils/custom-element.js";

import App from "../../dist/components/MyElement/script.es.js";
import css from "../../dist/components/MyElement/style.css";

/*#__INLINE__*/
init("my-element", ["name"], App, css);
