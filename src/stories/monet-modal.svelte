<script context="module">
	import MonetModal from '@loremlabs/monet/components/monet-modal/app.js';
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let isMonetized = false;
	/** @type {"center" | "bottom"} */
	export let variant = 'center';
	/** @type {"light" | "dark" | "accent"} */
	export let theme = 'dark';
	$: props = { isMonetized, variant, theme };

	let target;
	let modal;
	onMount(() => {
		modal = new MonetModal({ target, props });
	});
	afterUpdate(() => {
		modal.$set(props);
	});
</script>

<div bind:this={target} />

<style src="../../node_modules/@loremlabs/monet/components/monet-modal/app.css" global>
</style>
