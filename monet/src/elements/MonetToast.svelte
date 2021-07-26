<script lang="ts">
	import { onMount } from "svelte";
	import MonetToast from "../components/MonetToast/MonetToast.svelte";
	import HiddenOnScroll from "../utils/HiddenOnScroll.svelte";

	let collapsed = false;
	onMount(() => {
		const timeout = 4000;
		// Go to small state after a while to reduce distraction
		setTimeout(() => (collapsed = true), timeout);
	});
</script>

<HiddenOnScroll>
	<MonetToast {...$$props} {collapsed} />
</HiddenOnScroll>
