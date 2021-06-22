<script context="module">
	const themeOptions = {
		name: 'theme',
		default: 'light',
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
		default: 'center',
		options: [
			['center', 'Centered', 'Centered of page.'],
			['bottom', 'Bottom', 'Sticky on bottom of page.'],
		],
		value(val) {
			if (!val) return undefined;
			return val;
		},
	};

	const name = 'monet-modal';
	const options = [themeOptions, variantOptions];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';

	let theme = themeOptions.default;
	let variant = variantOptions.default;
	$: values = [theme, variant];
</script>

<Page {name} {options} {values}>
	<RadioGroup bind:selected={theme} legend="Theme" name="theme" options={themeOptions.options} />
	<RadioGroup
		bind:selected={variant}
		legend="Variant"
		name="variant"
		options={variantOptions.options}
	/>
</Page>
