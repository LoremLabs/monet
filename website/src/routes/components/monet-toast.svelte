<script>
	import { onMount } from 'svelte';
	import Page from '$lib/components/components/Page.svelte';
	import Text from '$lib/components/components/Text.svelte';
	import userPref from '$lib/components/components/monetization-type';
	import { defaults as _defaults } from '@loremlabs/monet/dist/components/MonetToast.mjs';
	/** @type {import("@loremlabs/monet/src/components/MonetToast/defaults")} */
	const defaults = _defaults;

	const textOptions = { name: 'text', default: defaults.text };

	const name = 'monet-toast';
	const options = [textOptions];

	$: type = typeof window !== 'undefined' ? $userPref : 'webmon';
	onMount(() => userPref.subscribe((t) => (type = t)));
	$: text = textOptions.default(type);
	$: values = [text];
</script>

<Page {type} {name} {options} {values} demoStyle="min-height: 300px;">
	<Text name={textOptions.name} label="Text" bind:value={text} />
</Page>
