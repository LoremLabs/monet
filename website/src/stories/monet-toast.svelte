<script context="module">
	import MonetToast, { defaults } from '@loremlabs/monet/dist/components/MonetToast.mjs';
	export { defaults };
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let type = defaults.type;
	export let text = defaults.text(type);
	$: props = { type, text };

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

<style src="../../node_modules/@loremlabs/monet/dist/components/MonetToast.css" global>
</style>
