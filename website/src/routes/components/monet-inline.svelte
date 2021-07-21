<script context="module">
	import { defaults } from '@loremlabs/monet/components/monet-inline/app.mjs';
	const markupComment = 'Add following within `<body></body>` where you want the prompt to appear';

	const themeOptions = {
		name: 'theme',
		default: defaults.theme,
		options: [
			['light', 'Light'],
			['dark', 'Dark'],
			['dim', 'Dark (dim)'],
		],
	};
	const heading1Options = { name: 'heading1', default: defaults.heading1 };
	const heading2Options = { name: 'heading2', default: defaults.heading2 };
	const subtitleOptions = { name: 'subtitle', default: defaults.subtitle };
	const bodyOptions = { name: 'body', default: defaults.body };
	const ctaTextOptions = { name: 'cta', prop: 'ctaText', default: defaults.ctaText };
	const linkOptions = { name: 'link', prop: 'href', default: defaults.href };

	const name = 'monet-inline';
	const options = [
		themeOptions,
		heading1Options,
		heading2Options,
		subtitleOptions,
		bodyOptions,
		ctaTextOptions,
		linkOptions,
	];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';
	import Text from '$lib/components/components/Text.svelte';

	let theme = themeOptions.default;
	let heading1 = heading1Options.default;
	let heading2 = heading2Options.default;
	let subtitle = subtitleOptions.default;
	let body = bodyOptions.default;
	let ctaText = ctaTextOptions.default;
	let link = linkOptions.default;
	$: values = [theme, heading1, heading2, subtitle, body, ctaText, link];
</script>

<Page {name} {options} {values} {markupComment}>
	<RadioGroup bind:selected={theme} legend="Theme" name="theme" options={themeOptions.options} />
	<Text name={ctaTextOptions.name} label="CTA Text" bind:value={ctaText} />
	<Text name={linkOptions.name} label="CTA URL" bind:value={link} />
	<Text name={heading1Options.name} label="First Heading" bind:value={heading1} />
	<Text name={heading2Options.name} label="Second Heading" bind:value={heading2} />
	<Text name={subtitleOptions.name} label="Subtitle" bind:value={subtitle} />
	<Text name={bodyOptions.name} label="Body Text" rows={3} bind:value={body} />
</Page>
