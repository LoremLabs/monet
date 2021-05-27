// fix webcomponents + svelte transitions
// https://github.com/sveltejs/svelte/issues/4735#issuecomment-703129877
import * as transitions from "svelte/transition";

type TransitionFn = (node: Element, params: unknown) => any;

export default function fix<T extends TransitionFn>(transition: T) {
	return (
		node: Parameters<T>[0],
		params: Parameters<T>[1],
	): ReturnType<typeof transition> => {
		if (!node.hasOwnProperty("ownerDocument")) {
			Object.defineProperty(node, "ownerDocument", {
				get: () => node.getRootNode().ownerDocument || node.getRootNode(),
			});
		}
		return transition(node, params);
	};
}

export const fade = fix(transitions.fade);
export const fly = fix(transitions.fly);
// add more as needed
