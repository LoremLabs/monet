<script context="module">
	import { isMonetizedOptions } from '$lib/components/components/common-options.js';

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
	const options = [themeOptions, variantOptions, isMonetizedOptions];
</script>

<script>
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';
	import Heading from '$lib/components/components/Heading.svelte';
	import ScriptSnippet from '$lib/components/components/ScriptSnippet.svelte';
	import MarkupSnippet from '$lib/components/components/MarkupSnippet.svelte';
	import OptionsHeader from '$lib/components/components/OptionsHeader.svelte';
	import ResizeableColumns from '$lib/components/components/ResizeableColumns.svelte';
	import Demo from '$lib/components/components/Demo.svelte';
	import IsMonetized from '$lib/components/components/IsMonetized.svelte';

	let theme = themeOptions.default;
	let variant = variantOptions.default;
	let isMonetized = isMonetizedOptions.default;
	$: values = [theme, variant, isMonetized];
</script>

<Heading heading={name} />

<ScriptSnippet {name} />
<MarkupSnippet {name} {options} {values} />

<form action="#">
	<OptionsHeader storybookPath="/story/{name}" />

	<ResizeableColumns>
		<div slot="left" class="flex flex-col gap-4">
			<IsMonetized bind:isMonetized />
			<RadioGroup
				bind:selected={theme}
				legend="Theme"
				name="theme"
				options={themeOptions.options}
			/>
			<RadioGroup
				bind:selected={variant}
				legend="Variant"
				name="variant"
				options={variantOptions.options}
			/>
		</div>

		<Demo slot="right" {name} {options} {values} />
	</ResizeableColumns>
</form>
