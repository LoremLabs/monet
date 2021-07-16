<script lang="ts">
	import { onMount } from "svelte";
	import MonetToast from "../components/MonetToast/MonetToast.svelte";
	import * as defaults from "../components/MonetToast/defaults";
	import HiddenOnScroll from "../utils/HiddenOnScroll.svelte";

	export let text = defaults.text;
	let collapsed = false;
	onMount(() => {
		const timeout = 4000;
		// Go to small state after a while to reduce distraction
		setTimeout(() => (collapsed = true), timeout);
	});
</script>

<HiddenOnScroll>
	<MonetToast {text} {collapsed} />
</HiddenOnScroll>
