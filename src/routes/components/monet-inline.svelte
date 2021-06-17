<script context="module">
	import { isMonetizedOptions } from '$lib/components/components/common-options.js';

	const markupComment = 'Add following within `<body></body>` where you want the prompt to appear';

	const themeOptions = {
		name: 'theme',
		default: 'light',
		options: [
			['light', 'Light'],
			['dark', 'Dark'],
			['dim', 'Dark (dim)'],
		],
		value(val) {
			if (!val) return undefined;
			return val;
		},
	};

	const name = 'monet-inline';
	const options = [themeOptions, isMonetizedOptions];
</script>

<script>
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';
	import Heading from '$lib/components/components/Heading.svelte';
	import ScriptSnippet from '$lib/components/components/ScriptSnippet.svelte';
	import MarkupSnippet from '$lib/components/components/MarkupSnippet.svelte';
	import OptionsHeader from '$lib/components/components/OptionsHeader.svelte';
	import ResizeableColumns from '$lib/components/components/ResizeableColumns.svelte';
	import IsMonetized from '$lib/components/components/IsMonetized.svelte';
	import Demo from '$lib/components/components/Demo.svelte';

	let theme = themeOptions.default;
	let isMonetized = isMonetizedOptions.default;
	$: values = [theme, isMonetized];
</script>

<Heading heading={name} />

<ScriptSnippet {name} />
<MarkupSnippet {name} {options} {values} comment={markupComment} />

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
		</div>

		<Demo slot="right" {name} {options} {values} />
	</ResizeableColumns>
</form>
