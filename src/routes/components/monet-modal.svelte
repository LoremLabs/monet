<script context="module">
	import { defaults } from '@loremlabs/monet/components/monet-modal/app.mjs';
	const themeOptions = {
		name: 'theme',
		default: defaults.theme,
		options: [
			['light', 'Light'],
			['dark', 'Dark'],
			['accent', 'Accent (Green)'],
		],
		value(val) {
			if (!val) return undefined;
			return val;
		},
	};
	const variantOptions = {
		name: 'variant',
		default: defaults.variant,
		options: [
			['center', 'Centered', 'Centered of page.'],
			['bottom', 'Bottom', 'Sticky on bottom of page.'],
		],
		value(val) {
			if (!val) return undefined;
			return val;
		},
	};
	const subtitleOptions = {
		name: 'subtitle',
		default: defaults.subtitle,
		value: (val) => val || undefined,
	};

	const name = 'monet-modal';
	const options = [themeOptions, variantOptions, subtitleOptions];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';
	import Text from '$lib/components/components/Text.svelte';

	let theme = themeOptions.default;
	let variant = variantOptions.default;
	let subtitle = subtitleOptions.default;
	$: values = [theme, variant, subtitle];
</script>

<Page {name} {options} {values}>
	<RadioGroup bind:selected={theme} legend="Theme" name="theme" options={themeOptions.options} />
	<RadioGroup
		bind:selected={variant}
		legend="Variant"
		name="variant"
		options={variantOptions.options}
	/>
	<Text name={subtitleOptions.name} label="Subtitle" bind:value={subtitle} />
</Page>
