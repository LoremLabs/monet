<script context="module">
	import MonetInline, { defaults } from '@loremlabs/monet/dist/components/monet-inline/app.mjs';
	export { defaults };
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';

	export let type = defaults.type;
	export let theme = defaults.theme;
	export let heading1 = defaults.heading1;
	export let heading2 = defaults.heading2(type);
	export let subtitle = defaults.subtitle;
	export let body = defaults.body(type);
	export let ctaText = defaults.ctaText(type);
	export let href = defaults.href;
	$: props = { type, theme, heading1, heading2, subtitle, body, ctaText, href };

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

<style src="../../node_modules/@loremlabs/monet/dist/components/monet-inline/app.css" global>
</style>
