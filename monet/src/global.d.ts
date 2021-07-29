/// <reference types="svelte" />
/// <reference types="vite/client" />

// svelte-dnd-action
// https://github.com/isaacHagoel/svelte-dnd-action/blob/1d6fc05459d367db04544cd5bb05bfdc054bad1d/README.md#typescript
declare type DndEvent = import("svelte-dnd-action").DndEvent;
declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onconsider?: (
			event: CustomEvent<DndEvent> & { target: EventTarget & T },
		) => void;
		onfinalize?: (
			event: CustomeEvent<DndEvent> & { target: EventTarget & T },
		) => void;
	}
}

import type { Monetization } from "@loremlabs/monetization-capability-api/build";
declare global {
	interface Window {
		monet?: Monetization;
	}
}
