<script lang="ts">
	import { writable } from "svelte/store";
	import MonetRiser from "../components/MonetRiser/MonetRiser.svelte";

	let collapsed = writable(false);
	let hidden = writable(false);

	let scrollY = 0;
	let lastScrollY = 0;
	function hideOnScroll(y = 0) {
		/** Be at least this much from top of page before hiding */
		const offset = 200;
		/** Do nothing if scrolled lesser (to support slow scrolling) */
		const tolerance = 10;

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
	<MonetRiser collapsed={$collapsed} />
{/if}
