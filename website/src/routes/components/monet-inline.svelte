<script>
	import { onMount } from 'svelte';
	import Page from '$lib/components/components/Page.svelte';
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';
	import Text from '$lib/components/components/Text.svelte';
	import userPref from '$lib/components/components/monetization-type';
	import { defaults as _defaults } from '@loremlabs/monet/dist/components/monet-inline/app.mjs';
	/** @type {import("@loremlabs/monet/src/components/MonetInline/defaults")} */
	const defaults = _defaults;

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

	$: type = typeof window !== 'undefined' ? $userPref : 'webmon';
	onMount(() => userPref.subscribe((t) => (type = t)));
	let theme = themeOptions.default;
	let heading1 = heading1Options.default;
	let subtitle = subtitleOptions.default;
	let link = linkOptions.default;
	$: heading2 = heading2Options.default(type);
	$: body = bodyOptions.default(type);
	$: ctaText = ctaTextOptions.default(type);
	$: values = [theme, heading1, heading2, subtitle, body, ctaText, link];
</script>

<Page {type} {name} {options} {values} {markupComment}>
	<RadioGroup bind:selected={theme} legend="Theme" name="theme" options={themeOptions.options} />
	<Text name={ctaTextOptions.name} label="CTA Text" bind:value={ctaText} />
	<Text name={linkOptions.name} label="CTA URL" bind:value={link} />
	<Text name={heading1Options.name} label="First Heading" bind:value={heading1} />
	<Text name={heading2Options.name} label="Second Heading" bind:value={heading2} />
	<Text name={subtitleOptions.name} label="Subtitle" bind:value={subtitle} />
	<Text name={bodyOptions.name} label="Body Text" rows={3} bind:value={body} />
</Page>
