<script context="module">
	import { defaults } from '@loremlabs/monet/components/monet-riser/app.mjs';
	const heading1Options = { name: 'heading1', default: defaults.heading1 };
	const heading2Options = { name: 'heading2', default: defaults.heading2 };
	const textOptions = { name: 'text', default: defaults.text };
	const ctaTextOptions = { name: 'ctaText', default: defaults.ctaText };
	const ctaTextMobileOptions = { name: 'ctaTextMobile', default: defaults.ctaTextMobile };
	const hrefOptions = { name: 'href', default: defaults.href };

	const name = 'monet-riser';
	const options = [
		heading1Options,
		heading2Options,
		textOptions,
		ctaTextOptions,
		ctaTextMobileOptions,
		hrefOptions,
	];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	import Text from '$lib/components/components/Text.svelte';

	let heading1 = heading1Options.default;
	let heading2 = heading2Options.default;
	let text = textOptions.default;
	let ctaText = ctaTextOptions.default;
	let ctaTextMobile = ctaTextMobileOptions.default;
	let href = hrefOptions.default;
	$: values = [heading1, heading2, text, ctaText, ctaTextMobile, href];
</script>

<Page {name} {options} {values} demoStyle="min-height: 400px;">
	<div class="flex gap-2">
		<Text name={ctaTextOptions.name} label="CTA Text" bind:value={ctaText} />
		<Text
			name={ctaTextMobileOptions.name}
			label="CTA Text (small screens)"
			bind:value={ctaTextMobile}
		/>
	</div>
	<Text name={hrefOptions.name} label="CTA URL" bind:value={href} />
	<Text name={heading1Options.name} label="First Heading" bind:value={heading1} />
	<Text name={heading2Options.name} label="Second Heading" bind:value={heading2} />
	<Text name={textOptions.name} label="Body Text" rows={3} bind:value={text} />
</Page>
