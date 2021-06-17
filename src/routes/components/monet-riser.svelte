<script context="module">
	import { isMonetizedOptions } from '$lib/components/components/common-options.js';

	const name = 'monet-riser';
	const options = [isMonetizedOptions];
</script>

<script>
	import Heading from '$lib/components/components/Heading.svelte';
	import ScriptSnippet from '$lib/components/components/ScriptSnippet.svelte';
	import MarkupSnippet from '$lib/components/components/MarkupSnippet.svelte';
	import OptionsHeader from '$lib/components/components/OptionsHeader.svelte';
	import ResizeableColumns from '$lib/components/components/ResizeableColumns.svelte';
	import Demo from '$lib/components/components/Demo.svelte';
	import IsMonetized from '$lib/components/components/IsMonetized.svelte';

	let isMonetized = isMonetizedOptions.default;
	$: values = [isMonetized];
</script>

<Heading heading={name} />

<ScriptSnippet {name} />
<MarkupSnippet {name} {options} {values} />

<form action="#">
	<OptionsHeader storybookPath="/story/{name}" />

	<ResizeableColumns>
		<div slot="left" class="flex flex-col gap-4">
			<IsMonetized bind:isMonetized />
		</div>

		<Demo slot="right" {name} {options} {values} style="min-height: 400px;" />
	</ResizeableColumns>
</form>
