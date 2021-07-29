<script>
	import { onMount } from 'svelte';
	import Page from '$lib/components/components/Page.svelte';
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';
	import Text from '$lib/components/components/Text.svelte';
	import userPref from '$lib/components/components/monetization-type';
	import { defaults as _defaults } from '@loremlabs/monet/dist/components/MonetModal.mjs';
	/** @type {import("@loremlabs/monet/src/components/MonetModal/defaults")} */
	const defaults = _defaults;

	const themeOptions = {
		name: 'theme',
		default: defaults.theme,
		options: [
			['light', 'Light'],
			['dark', 'Dark'],
			['accent', 'Accent (Green)'],
		],
	};
	const variantOptions = {
		name: 'variant',
		default: defaults.variant,
		options: [
			['center', 'Centered', 'Centered of page.'],
			['bottom', 'Bottom', 'Sticky on bottom of page.'],
		],
	};
	const subtitleOptions = {
		name: 'subtitle',
		default: defaults.subtitle,
	};
	const headingOptions = {
		name: 'heading',
		default: defaults.heading,
	};
	const textOptions = {
		name: 'text',
		default: defaults.text,
	};
	const linkOptions = {
		name: 'href',
		default: defaults.href,
	};
	const ctaOptions = {
		name: 'cta',
		prop: 'ctaText',
		default: defaults.ctaText,
	};

	const name = 'monet-modal';
	const options = [
		themeOptions,
		variantOptions,
		subtitleOptions,
		headingOptions,
		textOptions,
		linkOptions,
		ctaOptions,
	];

	$: type = typeof window !== 'undefined' ? $userPref : 'webmon';
	onMount(() => userPref.subscribe((t) => (type = t)));
	let theme = themeOptions.default;
	let variant = variantOptions.default;
	let subtitle = subtitleOptions.default;
	let link = linkOptions.default;
	let cta = ctaOptions.default;
	$: text = textOptions.default(type);
	$: heading = headingOptions.default(type);
	$: values = [theme, variant, subtitle, heading, text, link, cta];
</script>

<Page {type} {name} {options} {values}>
	<RadioGroup bind:selected={theme} legend="Theme" name="theme" options={themeOptions.options} />
	<RadioGroup
		bind:selected={variant}
		legend="Variant"
		name="variant"
		options={variantOptions.options}
	/>
	<Text name={ctaOptions.name} label="CTA Text" bind:value={cta} />
	<Text name={linkOptions.name} label="CTA URL" bind:value={link} />
	<Text name={subtitleOptions.name} label="Subtitle" bind:value={subtitle} />
	<Text name={headingOptions.name} label="Heading" bind:value={heading} />
	<Text name={textOptions.name} label="Body Text" rows={3} bind:value={text} />
</Page>
