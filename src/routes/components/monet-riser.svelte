<script context="module">
	const name = 'monet-riser';
	const options = [];
</script>

<script>
	import Heading from '$lib/components/components/Heading.svelte';
	import ScriptSnippet from '$lib/components/components/ScriptSnippet.svelte';
	import MarkupSnippet from '$lib/components/components/MarkupSnippet.svelte';

	$: values = [];
</script>

<Heading heading={name} />

<ScriptSnippet {name} />
<MarkupSnippet {name} {options} {values} />

<form action="#">
	<h2 class="font-extrabold text-2xl md:text-4xl py-4 mt-4">Options</h2>
	<p class="text-gray-500 text-base">None.</p>
</form>
