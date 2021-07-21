<script context="module">
	import MonetToast, { defaults } from '@loremlabs/monet/dist/components/monet-toast/app.mjs';
	export { defaults };
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let text = defaults.text;
	$: props = { text };

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

<style src="../../node_modules/@loremlabs/monet/dist/components/monet-toast/app.css" global>
</style>
