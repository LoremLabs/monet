<script>
	import { writable } from "svelte/store";

	/** Be at least this much from top of page before hiding */
	export let offset = 200;
	/** Do nothing if scrolled lesser (to support slow scrolling) */
	export let tolerance = 10;

	let scrollY = 0;
	let lastScrollY = 0;
	let hidden = writable(false);

	function hideOnScroll(y = 0) {
		const scrolled = lastScrollY - y;
		lastScrollY = y;
		if (y < offset) {
			hidden.set(false);
			return;
		}
		if (!scrolled || Math.abs(scrolled) < tolerance) {
			return;
		}
		const isGoingDown = scrolled < 0;
		hidden.set(isGoingDown);
	}
	$: hideOnScroll(scrollY);
</script>

<svelte:window bind:scrollY />

{#if !$hidden}
	<slot />
{/if}
