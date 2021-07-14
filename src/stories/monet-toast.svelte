<script context="module">
	import MonetToast from '@loremlabs/monet/components/monet-toast/app.js';
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	$: props = {};

	let target;
	let toast;
	onMount(() => {
		toast = new MonetToast({ target, props });
	});
	afterUpdate(() => {
		toast.$set(props);
	});
</script>

<div bind:this={target} />

<style src="../../node_modules/@loremlabs/monet/components/monet-toast/app.css" global>
</style>
