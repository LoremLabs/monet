<script context="module">
	import Highlight from 'svelte-highlight/src/HighlightSvelte.svelte';

	const SOURCE_PREFIX = {
		jsDelivr: 'https://cdn.jsdelivr.net/npm/@loremlabs/monet/',
		unpkg: 'https://unpkg.com/@loremlabs/monet/',
	};
</script>

<script>
	/** @type {keyof SOURCE_PREFIX} */
	let source = 'unpkg';
	export let name = '';
</script>

<div class="float-right">
	<label for="source" class="text-sm font-medium text-gray-700 sr-only">Source</label>
	<select
		name="source"
		id="source"
		bind:value={source}
		class="bg-transparent text-white rounded-tr-md border-gray-700 focus:outline-none focus:ring-theme-500 focus:border-theme-500 text-xs"
	>
		<option value="unpkg">unpkg</option>
		<option value="jsDelivr">jsDelivr</option>
	</select>
</div>

<Highlight
	class="my-1 p-4 shadow-2xl rounded-md whitespace-pre-wrap"
	code={`<!-- Add following before </head> -->` +
		`\n<script src="${SOURCE_PREFIX[source]}${name}.js" defer><${'/script>'}`}
/>
