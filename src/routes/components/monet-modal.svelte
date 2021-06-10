<script context="module">
	const name = 'monet-modal';

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

	const options = [themeOptions, variantOptions];
</script>

<script>
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';
	import Heading from '$lib/components/components/Heading.svelte';
	import ScriptSnippet from '$lib/components/components/ScriptSnippet.svelte';
	import MarkupSnippet from '$lib/components/components/MarkupSnippet.svelte';

	let theme = themeOptions.default;
	let variant = variantOptions.default;
	$: values = [theme, variant];
</script>

<Heading heading={name} />

<ScriptSnippet {name} />
<MarkupSnippet {name} {options} {values} />

<form action="#">
	<h2 class="font-extrabold text-2xl md:text-4xl py-4 mt-4">Options</h2>
	<div class="flex flex-col gap-4">
		<RadioGroup bind:selected={theme} legend="Theme" name="theme" options={themeOptions.options} />
		<RadioGroup
			bind:selected={variant}
			legend="Variant"
			name="variant"
			options={variantOptions.options}
		/>
	</div>
</form>
