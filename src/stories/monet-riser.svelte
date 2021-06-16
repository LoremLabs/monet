<script context="module">
	import MonetRiser from '@loremlabs/monet/components/monet-riser/app.js';
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let isMonetized = false;
	export let collapsed = false;
	$: props = { isMonetized, collapsed };

	let target;
	let riser;
	onMount(() => {
		riser = new MonetRiser({ target, props });
	});
	afterUpdate(() => {
		riser.$set(props);
	});
</script>

<div bind:this={target} />

<style src="../../node_modules/@loremlabs/monet/components/monet-riser/app.css" global>
</style>
