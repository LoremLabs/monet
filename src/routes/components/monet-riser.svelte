<script context="module">
	const name = 'monet-riser';
	const options = [];
</script>

<script>
	import Heading from '$lib/components/components/Heading.svelte';
	import ScriptSnippet from '$lib/components/components/ScriptSnippet.svelte';
	import MarkupSnippet from '$lib/components/components/MarkupSnippet.svelte';
	import OptionsHeader from '$lib/components/components/OptionsHeader.svelte';
	import ResizeableColumns from '$lib/components/components/ResizeableColumns.svelte';
	import Demo from '$lib/components/components/Demo.svelte';

	$: values = [];
</script>

<Heading heading={name} />

<ScriptSnippet {name} />
<MarkupSnippet {name} {options} {values} />

<form action="#">
	<OptionsHeader storybookPath="/story/{name}" />

	<ResizeableColumns>
		<p slot="left" class="text-gray-500 text-base">None.</p>

		<Demo slot="right" {name} {options} {values} style="min-height: 400px;" />
	</ResizeableColumns>
</form>
