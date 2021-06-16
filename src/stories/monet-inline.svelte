<script context="module">
	import MonetInline from '@loremlabs/monet/components/monet-inline/app.js';
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let isMonetized = false;
	$: props = { isMonetized };

	let target;
	let inline;
	onMount(() => {
		inline = new MonetInline({ target, props });
	});
	afterUpdate(() => {
		inline.$set(props);
	});
</script>

<div bind:this={target} />

<style src="../../node_modules/@loremlabs/monet/components/monet-inline/app.css" global>
</style>
