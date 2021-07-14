<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import MonetToast from "../components/MonetToast/MonetToast.svelte";

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

	onMount(() => {
		const timeout = 4000;
		// Go to small state after a while to reduce distraction
		setTimeout(() => collapsed.set(true), timeout);
	});

	$: hideOnScroll(scrollY);
</script>

<svelte:window bind:scrollY />

{#if !$hidden}
	<MonetToast collapsed={$collapsed} />
{/if}
