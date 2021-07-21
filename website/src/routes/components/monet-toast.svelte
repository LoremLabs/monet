<script context="module">
	import { defaults } from '@loremlabs/monet/dist/components/monet-toast/app.mjs';
	const type = defaults.type;
	const textOptions = { name: 'text', default: defaults.text(type) };

	const name = 'monet-toast';
	const options = [textOptions];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	import Text from '$lib/components/components/Text.svelte';

	let text = textOptions.default;
	$: values = [text];
</script>

<Page {name} {options} {values} isMonetized={true} demoStyle="min-height: 300px;">
	<Text name={textOptions.name} label="Text" bind:value={text} />
</Page>
