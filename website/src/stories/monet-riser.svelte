<script context="module">
	import MonetRiser, { defaults } from '@loremlabs/monet/dist/components/monet-riser/app.mjs';
	export { defaults };
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let type = defaults.type;
	export let href = defaults.href;
	export let ctaText = defaults.ctaText(type);
	export let ctaTextMobile = defaults.ctaTextMobile(type);
	export let heading1 = defaults.heading1;
	export let heading2 = defaults.heading2(type);
	export let text = defaults.text(type);
	$: props = { type, href, ctaText, ctaTextMobile, heading1, heading2, text };

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

<style src="../../node_modules/@loremlabs/monet/dist/components/monet-riser/app.css" global>
</style>
