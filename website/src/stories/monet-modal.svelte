<script context="module">
	import MonetModal, { defaults } from '@loremlabs/monet/dist/components/MonetModal.mjs';
	export { defaults };
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let type = defaults.type;
	export let theme = defaults.theme;
	export let variant = defaults.variant;
	export let subtitle = defaults.subtitle;
	export let heading = defaults.heading(type);
	export let href = defaults.href;
	export let ctaText = defaults.ctaText;
	export let text = defaults.text(type);
	$: props = { type, variant, theme, subtitle, heading, href, ctaText, text };

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

<style src="../../node_modules/@loremlabs/monet/dist/components/MonetModal.css" global>
</style>
