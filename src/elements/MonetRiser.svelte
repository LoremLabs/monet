<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import MonetRiser from "../components/MonetRiser.svelte";

	const wm = document.monetization;
	let isMonetizedPromise = new Promise<boolean>((resolve) => {
		if (!wm) {
			console.log("no extension/polyfill", false);
			return resolve(false);
		}
		console.log("waiting for monetizationprogress, or timeout=5s ...");

		const timeout = setTimeout(() => {
			console.log("timeout", false);
			resolve(false);
			wm.removeEventListener("monetizationprogress", onProgress);
		}, 5_000);
		wm.addEventListener("monetizationprogress", onProgress);

		function onProgress() {
			console.log("onprogress", true);
			resolve(true);
			clearTimeout(timeout);
			wm.removeEventListener("monetizationprogress", onProgress);
		}
	});

	let collapsed = writable(false);
	let hidden = writable(false);

	onMount(() => {
		const timeout = 4000;
		// Go to small state after a while to reduce distraction
		isMonetizedPromise.finally(() => {
			setTimeout(() => collapsed.set(true), timeout);
		});
	});

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

{#await isMonetizedPromise then isMonetized}
	{#if !$hidden}
		<MonetRiser {isMonetized} collapsed={$collapsed} />
	{/if}
{:catch}
	<!-- nothing -->
{/await}
