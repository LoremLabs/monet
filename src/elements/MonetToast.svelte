<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import MonetToast from "../components/MonetToast/MonetToast.svelte";
	import HiddenOnScroll from "../utils/HiddenOnScroll.svelte";

	let collapsed = writable(false);
	onMount(() => {
		const timeout = 4000;
		// Go to small state after a while to reduce distraction
		setTimeout(() => collapsed.set(true), timeout);
	});
</script>

<HiddenOnScroll>
	<MonetToast collapsed={$collapsed} />
</HiddenOnScroll>
